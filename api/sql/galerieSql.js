class galerieSql {
    // public
    static getForet = "SELECT * FROM galerie_photo WHERE galerie_name = 'foret'";
    static getMicro = "SELECT * FROM galerie_photo WHERE galerie_name = 'micro'";
    static getFlore = "SELECT * FROM galerie_photo WHERE galerie_name = 'flore'";
    static getEau = "SELECT * FROM galerie_photo WHERE galerie_name = 'eau'";
    static getNoir = "SELECT * FROM galerie_photo WHERE galerie_name = 'noir'";
    static getJardin = "SELECT * FROM galerie_photo WHERE galerie_name = 'jardin'";
    // admin
    static deleteImg = "DELETE FROM galerie_photo where filename = ?";
    static postImg = "INSERT INTO galerie_photo (is_menu, galerie_name, caption, filename, alt) VALUES (?)";

}
module.exports = galerieSql;