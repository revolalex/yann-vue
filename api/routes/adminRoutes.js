// hass Password
const saltRounds = 10;
const bcrypt = require("bcrypt");
// token
const jwt = require("jsonwebtoken");
const config = require("../modules/config");
//sql
const adminSql = require('../sql/adminSql')

const adminRouter = async function (app, connection) {
  /******************** ADMIN PART ********************/
  /****************************************************/

  /***** Check if user with this userName already exist ****/
  await app.use("/signup/", (req, res, next) => {
    console.log(req.body.name);
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
  await app.post("/signup/", function (req, res) {
    let name = req.body.name.charAt(0).toUpperCase() + req.body.name.slice(1);
    let is_super_admin = req.body.is_super_admin
    let password = req.body.password;
    let email = req.body.email;
    let url = req.body.url;

    // Handle Error
    switch (true) {
      case name.length < 3:
        res.send("Name error");
        break;
      case email.length < 8:
        res.send("Email error");
        break;
      case password.length < 8:
        res.send("Password error");
        break;
      default:
        // Hash the password
        let passwordHash = bcrypt.hashSync(password, saltRounds);
        // Stock the hash password in db
        let user = [name, is_super_admin, passwordHash, email, url];
        connection.query(adminSql.signUp, [user], function (err, results) {
          if (err) throw err;
          res.send(results);
        });
        break;
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
            console.log("pass error");
            // res.status(401).send("Sorry, password incorrect");
            res.send("Sorry, password incorrect");
          }
        });
      }
    });
  });
};
module.exports = adminRouter;
