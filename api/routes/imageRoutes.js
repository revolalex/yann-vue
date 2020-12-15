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

  await app.post("/archive/", function (req, res) {
    console.log(req.body);
    const texte = req.body.texte
    const galerie_name = req.body.galerie_name
    const title = req.body.title
    const date = req.body.date
    const photo_image = req.body.photo_image
    const sql = "INSERT INTO images (text,galerie_name,title,date,photo_image) VALUES (?)";
    const imgToAdd = [texte,galerie_name,title,date,photo_image];


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
      case photo_images.length < 1:
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
};

module.exports = appRouter;
