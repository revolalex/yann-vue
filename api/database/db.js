var mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "alexandre",
  database: "yann",
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected to DB");

  let createDB = "CREATE database IF NOT EXISTS yann";
  connection.query(createDB, function(err, results) {
    if (err) throw err;
  });
  let imgTable =
    "CREATE TABLE IF NOT EXISTS images (id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, link VARCHAR(250) NOT NULL, category VARCHAR(100) NOT NULL,  description VARCHAR(200));";
  connection.query(imgTable, function(err, results) {
    if (err) throw err;
  });
  let adminTable =
    "CREATE TABLE IF NOT EXISTS admin (id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, name VARCHAR(30) NOT NULL, password VARCHAR(100) NOT NULL, email VARCHAR(200) NOT NULL);"
    connection.query(adminTable, function (err, results){
      if (err) throw err;
    })
});

module.exports = connection;
