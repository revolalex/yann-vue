//https://blog.bitsrc.io/uploading-files-and-images-with-vue-and-express-2018ca0eecd0
const multer = require('multer')

var storage = multer.diskStorage({   
  destination: function(req, file, cb) { 
     cb(null, './uploads');    
  }, 
  filename: function (req, file, cb) { 
     cb(null , file.originalname);   
  }
});

const upload = multer({
  // if you want to stock the image
  storage: storage,
  limits: {
    // 1.5 mega
    fileSize: 1500000
  }
})


const appRouter = async function (app, connection) {

  /******************** IMAGE ********************/
  await app.post("/images/", function (req, res) {
    const description =
      req.body.description.charAt(0).toUpperCase() +
      req.body.description.slice(1);
    const link = req.body.link;
    const category =
      req.body.category.charAt(0).toUpperCase() + req.body.category.slice(1);

    const imgToAdd = [link, category, description];
    const sql = "INSERT INTO images (link,category,description) VALUES (?)";

    switch (true) {
      case link.length < 3:
        res.send("link required min 3 char");
        break;
      case category.length < 3:
        res.send("category required min 3 char");
        break;
      case description.length < 3:
        res.send("description required min 3 char");
        break;
      default:
        connection.query(sql, [imgToAdd], function (err, results) {
          if (err) throw err;
          res.send(results);
        });
        break;
    }
  });



  /******************************** /post archive ****************************/
  /**************************** use for photo du mois ************************/
  await app.post("/archive/", upload.single('file'), function (req, res) {
    console.log(req.file.originalname);

    const texte = req.body.texte
    const galerie_name = req.body.galerie_name
    const title = req.body.title
    const date = req.body.date
    const photo_image = req.file
    const sql = "INSERT INTO archive (text,galerie_name,title,date,photo_image) VALUES (?)";
    const imgToAdd = [texte, galerie_name, title, date, photo_image];

    switch (true) {
      case title.length < 3:
        res.send("Title required min 3 char");
        break;
      case texte.length < 30:
        res.send("text required min 30 char");
        break;
      case date.length < 1:
        res.send("date is required");
        break;
      case photo_image.length < 1:
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
  await app.get("/archive/", upload.single('file'), function (req, res) {

    const sql = `SELECT * FROM archive`;
    connection.query(sql, function (err, results) {
      if (err) throw err;
      res.send(results);
    });



  })



};

module.exports = appRouter;
