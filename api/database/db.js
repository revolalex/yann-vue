var mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "alexandre",
  database: "yann",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected to DB");

  let createDB = "CREATE database IF NOT EXISTS yann";
  connection.query(createDB, function (err, results) {
    if (err) throw err;
  });

  // is_menu, galerie_name, caption, photo_images, alt
  let imgTable =
    "CREATE TABLE IF NOT EXISTS galerie_photo (id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, is_menu BOOLEAN, galerie_name VARCHAR(50) NOT NULL, caption VARCHAR(50) NOT NULL,  photo_image BLOB, alt VARCHAR(50));";
  connection.query(imgTable, function (err, results) {
    if (err) throw err;
  });

  //name, is_super_admin, password, email, url
  let adminTable =
    "CREATE TABLE IF NOT EXISTS admin (id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, name VARCHAR(30) NOT NULL, is_super_admin BOOLEAN, password VARCHAR(100) NOT NULL, email VARCHAR(100) NOT NULL , url VARCHAR(500) NOT NULL);";
  connection.query(adminTable, function (err, results) {
    if (err) throw err;
  })

  // text, galerie_name, title, date, photo_images 
  let archiveTable =
    "CREATE TABLE IF NOT EXISTS archive (id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, text VARCHAR(1000) NOT NULL, galerie_name VARCHAR(50), title VARCHAR(50) NOT NULL, date DATE NOT NULL, photo_image BLOB NOT NULL);"
  connection.query(archiveTable, function (err, results) {
    if (err) throw err;
  })
});

module.exports = connection;
