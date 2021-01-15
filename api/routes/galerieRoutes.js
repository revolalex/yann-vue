const auth = require('../middlewares/auth')
const multer = require('multer')
const fs = require('fs')

const galerieRouter = async function (app, connection) {

  // change storage repo
  const storageGalerie = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './src/assets/uploads/images/galerie/');
    },
    filename: function (req, file, cb) {

      var date = new Date();
      var dateStr =
        ("00" + (date.getMonth() + 1)).slice(-2) +
        ("00" + date.getDate()).slice(-2) +
        date.getFullYear() +
        ("00" + date.getHours()).slice(-2) +
        ("00" + date.getMinutes()).slice(-2) +
        ("00" + date.getSeconds()).slice(-2);

      cb(null, dateStr + file.originalname);
    }
  });
  // filter allowed only image
  const fileFilter = function (req, file, cb) {
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"]
    if (!allowedTypes.includes(file.mimetype)) {
      const error = new Error("Wrong file type")
      error.code = "WRONG_FILE_TYPE"
      return cb(error, false)
    }
    // it's ok
    cb(null, true)
  }

  const uploadGalerie = multer({
    // if you want to stock the image
    storage: storageGalerie,
    limits: {
      // 1.5 mega
      fileSize: 1500000
    },
    fileFilter
  })

  // middleware to handle file format
  app.use(function (err, req, res, next) {
    if (err.code === "WRONG_FILE_TYPE") {
      res.send("Error only images are allowed")
    }
    return
  })


  /******************** IMAGE ********************/
  await app.post("/galerie/", auth, uploadGalerie.single('file'), function (req, res) {

    var dateNow = new Date();
    // format MM/DD/HH/MM/SS
    var dateStr =
      ("00" + (dateNow.getMonth() + 1)).slice(-2) +
      ("00" + dateNow.getDate()).slice(-2) +
      dateNow.getFullYear() +
      ("00" + dateNow.getHours()).slice(-2) +
      ("00" + dateNow.getMinutes()).slice(-2) +
      ("00" + dateNow.getSeconds()).slice(-2);

    const filename = dateStr + req.file.originalname
    const is_menu = req.body.is_menu
    const galerie_name = req.body.galerie_name
    const caption = req.body.caption
    const alt =
      req.body.alt.charAt(0).toUpperCase() +
      req.body.alt.slice(1);

    const imgToAdd = [is_menu, galerie_name, caption, filename, alt];

    const sql = "INSERT INTO galerie_photo (is_menu, galerie_name, caption, filename, alt) VALUES (?)";
    connection.query(sql, [imgToAdd], function (err, results) {
      if (err) throw err;
      res.send(results);
    });
  });

  /************************** FORET PART **************************/
  /****************************************************************/
  
  /******************** Get all galerie foret ********************/
  await app.get("/galerie/foret/", function (req, res) {
    try {
      const sql = `SELECT * FROM galerie_photo WHERE galerie_name = 'foret'`;
      connection.query(sql, function (err, results) {
        if (err) throw err;
        res.send(results);
      });
    } catch (error) {
      res.status(203).send(error)
    }
  })

  /************ delete image with this filename in DB and in folder **************/
  await app.delete("/galerie/foret/:filename", auth, function (req, res) {
    try {
      let filename = req.params.filename;
      let filenameToDelete = "DELETE FROM galerie_photo where filename = ?";
      connection.query(filenameToDelete, [filename], function (err, results) {
        if (err) throw err;
        // handle unknown user
        if (results.affectedRows > 0) {
          res.status(200).send("image removed");
          const path = `./src/assets/uploads/images/galerie/${filename}`
          //file removed
          fs.unlink(path, (err) => {
            if (err) {
              throw (err)
            }
          })
        } else {
          res.status(203).send("image unknown");
        }
      });
    } catch (error) {
      res.status(203).send(error)
    }
  });





  /************************** MICR PART **************************/
  /****************************************************************/
  
  /******************** Get all galerie Micro ********************/
  await app.get("/galerie/micro", function (req, res) {
    try {
      const sql = `SELECT * FROM galerie_photo WHERE galerie_name = 'micro'`;
      connection.query(sql, function (err, results) {
        if (err) throw err;
        res.send(results);
      });
    } catch (error) {
      res.status(203).send(error)
    }
  })

  /************ delete image with this filename in DB and in folder **************/
  await app.delete("/galerie/micro/:filename", auth, function (req, res) {
    try {
      let filename = req.params.filename;
      let filenameToDelete = "DELETE FROM galerie_photo where filename = ?";
      connection.query(filenameToDelete, [filename], function (err, results) {
        if (err) throw err;
        // handle unknown user
        if (results.affectedRows > 0) {
          res.status(200).send("image removed");
          const path = `./src/assets/uploads/images/galerie/${filename}`
          //file removed
          fs.unlink(path, (err) => {
            if (err) {
              throw (err)
            }
          })
        } else {
          res.status(203).send("image unknown");
        }
      });
    } catch (error) {
      res.status(203).send(error)
    }
  });






};

module.exports = galerieRouter;
