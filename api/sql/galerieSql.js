class galerieSql {
    static postImg = "INSERT INTO galerie_photo (is_menu, galerie_name, caption, filename, alt) VALUES (?)";
    static getForet = "SELECT * FROM galerie_photo WHERE galerie_name = 'foret'";
    static getMicro = "SELECT * FROM galerie_photo WHERE galerie_name = 'micro'";
    static deleteImg = "DELETE FROM galerie_photo where filename = ?";

}
module.exports = galerieSql;