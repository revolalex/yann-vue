//https://blog.bitsrc.io/uploading-files-and-images-with-vue-and-express-2018ca0eecd0
const multer = require('multer')
const auth = require('../middlewares/auth')


const archiveRouter = async function (app, connection) {
  // config to store the image
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './src/assets/uploads/images/');
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

  // config global
  const upload = multer({
    // if you want to stock the image
    storage: storage,
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

  /******************************** /post archive ****************************/
  /**************************** use for photo du mois ************************/
  await app.post("/archive/", auth, upload.single('file'), function (req, res) {

    var dateNow = new Date();
    var dateStr =
      ("00" + (dateNow.getMonth() + 1)).slice(-2) +
      ("00" + dateNow.getDate()).slice(-2) +
      dateNow.getFullYear() +
      ("00" + dateNow.getHours()).slice(-2) +
      ("00" + dateNow.getMinutes()).slice(-2) +
      ("00" + dateNow.getSeconds()).slice(-2);

    console.log("image register filename:", dateStr + req.file.originalname);

    const texte = req.body.texte
    const galerie_name = req.body.galerie_name
    const title = req.body.title
    const date = req.body.date
    const filename = dateStr + req.file.originalname

    const sql = "INSERT INTO archive (text,galerie_name,title,date,filename) VALUES (?)";
    const imgToAdd = [texte, galerie_name, title, date, filename];

    switch (true) {
      case title.length === 0:
        res.send("Title is required");
        break;
      case title.length < 3:
        res.send("Title required min 3 char");
        break;
      case texte.length === 0:
        res.send("text required min 30 char");
        break;
      case texte.length < 30:
        res.send("text required min 30 char");
        break;
      case date.length < 1:
        res.send("date is required");
        break;
      case filename.length < 1:
        res.send("photo is required");
        break;
      default:
        connection.query(sql, [imgToAdd], function (err, results) {
          if (err) throw err;
          res.send(results);
        });
        break;
    }
  })

  /******************************** /get archives ****************************/
  /**************************** use for photo du mois ************************/
  await app.get("/archive/", function (req, res) {
    const sql = `SELECT * FROM archive`;
    connection.query(sql, function (err, results) {
      if (err) throw err;
      res.send(results);
    });
  })

  await app.post("/rating/", function (req, res) {
    const filename = req.body.filename
    const rating = req.body.rating

    const sql = "INSERT INTO archive_rating (filename, rating) VALUES (?)";
    const rate = [filename, rating];

    connection.query(sql, [rate], function (err, results) {
      if (err) throw err;
    });
    // requete sql get the average rating for a filename
    const sqlAverage = `SELECT CAST(AVG(rating) AS decimal(10,2)) FROM archive_rating where filename ="${filename}";`
    connection.query(sqlAverage, function (err, results) {
      if (err) throw err;
      res.send(results);
    });
  })

  // await app.get("/rateAverage/", function (req, res) {
  //   const filename = req.body.filename
  //   const sql = `SELECT CAST(AVG(rating) AS decimal(10,2)) FROM archive_rating where filename ="${filename}";`
  //   connection.query(sql, function (err, results) {
  //     if (err) throw err;
  //     res.send(results);
  //   });
  // })


};

module.exports = archiveRouter;
