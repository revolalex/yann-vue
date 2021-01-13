// hass Password
const saltRounds = 10;
const bcrypt = require("bcrypt");
// token
const jwt = require("jsonwebtoken");
const config = require("../modules/config");
//sql
const adminSql = require('../sql/adminSql')
const auth = require('../middlewares/auth')

const adminRouter = async function (app, connection) {
  /******************** ADMIN PART ********************/

  /***** Check if user with this userName already exist ****/
  await app.use("/signup/", (req, res, next) => {
    connection.query(
      `SELECT * FROM admin WHERE name = '${req.body.name}'`,
      (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
          res.status(200).send("This user already exist");
        } else {
          next();
        }
      }
    );
  });

  /******************** SIGN-UP ********************/
  //name, is_super_admin, password, email, url
  await app.post("/signup/", auth, function (req, res) {
    try {
      let name = req.body.name.charAt(0).toUpperCase() + req.body.name.slice(1);
      let is_super_admin = req.body.is_super_admin
      let password = req.body.password;
      let email = req.body.email;
      let url = req.body.url;
      // Handle Error
      switch (true) {
        case name.length = 0:
          throw "Names is required"
        case name.length < 3:
          throw "Name error min 3 characters";
        case email.length = 0:
          throw "Email is required";
        case password.length = 0:
          throw "Password is required";
        case password.length < 8:
          throw "Password error min 8 character";
        case url.length = 0:
          throw "Url is required";
        case url.length < 8:
          throw "Url error min 8 characters";
        case is_super_admin != 0 || 1:
          throw "is_super_admin must be 1 or 0";
        case is_super_admin.length = 0:
          throw "is_super_admin is required";
        default:
          // Hash the password
          let passwordHash = bcrypt.hashSync(password, saltRounds);
          // Stock the hash password in db
          let user = [name, is_super_admin, passwordHash, email, url];
          connection.query(adminSql.signUp, [user], function (err, results) {
            if (err) throw err;
            res.status(201).send(results);
          });
          break;
      }
    } catch (error) {
      res.status(203).send(error)
    }
  });

  /******************** SIGN-IN ********************/
  // check if the password is the good one for this specific email
  // then deliver a jwt
  await app.post("/signin/", function (req, res) {
    let name = req.body.name.charAt(0).toUpperCase() + req.body.name.slice(1);
    let password = req.body.password;
    const sql = `SELECT * FROM admin where name ='${name}';`;
    connection.query(sql, function (err, results) {
      if (err) throw err;
      //handle name error
      if (!Array.isArray(results) || !results.length) {
        res.send("Sorry, name incorrect");
      } else {
        let nameInDb = results[0].name;
        let passwordStockInDb = results[0].password;
        let emailInDb = results[0].email;
        let id = results[0].id;
        let url = results[0].url;
        let is_super_admin = results[0].is_super_admin;

        /******* TOKEN *******/
        let token = jwt.sign(
          { name: nameInDb, email: emailInDb, id: id },
          config.secret
        );
        bcrypt.compare(password, passwordStockInDb, function (err, result) {
          console.log("RESULT", result);
          if (result === true) {
            // get the decoded payload ignoring signature, no secretOrPrivateKey needed
            var decoded = jwt.decode(token);
            // get the decoded payload and header
            var decoded = jwt.decode(token, { complete: true });
            console.log("header ==>", decoded.header);
            console.log("payload ==>", decoded.payload);
            res.status(200).send({
              auth: true,
              token: token,
              id: id,
              name: nameInDb,
              url: url,
              is_super_admin: is_super_admin
            });
          } else {
            res.status(203).send("Sorry, password incorrect");
          }
        });
      }
    });
  });

  /******************** Get all admin ********************/
  await app.get("/admin/", auth, function (req, res) {
    try {
      const sql = `SELECT * FROM admin`;
      connection.query(sql, function (err, results) {
        if (err) throw err;
        res.send(results);
      });
    } catch (error) {
      res.status(203).send(error)
    }
  })

  /******************** Change email of an admin ********************/
  await app.put("/admin/", auth, function (req, res) {
    try {
      connection.query(adminSql.updateEmail(req.body.email, req.body.specify), function (err, results) {
        if (err) throw err;
        res.send(results);
      });
    } catch (error) {
      res.status(203).send(error)
    }
  })


  /************ delete user with this email ==> /users/:email **************/
  await app.delete("/admin/:email", auth, function (req, res) {
    try {
      let email = req.params.email;
      let usersMailToDelete = "DELETE FROM admin where email = ?";
      connection.query(usersMailToDelete, [email], function (err, results) {
        if (err) throw err;
        // handle unknown user
        if (results.affectedRows > 0) {
          res.status(200).send("Users removed");
        } else {
          res.status(203).send("Unknown users");
        }
      });
    } catch (error) {
      res.status(203).send(error)
    }
  });

};
module.exports = adminRouter;
