const auth = require('../middlewares/auth')

const imageRouter = async function (app, connection) {

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

};

module.exports = imageRouter;
