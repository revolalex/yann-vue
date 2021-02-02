class carouselSql {
    // public
    static getAll = `SELECT * FROM caroussel`
    // admin
    static deleteImg = "DELETE FROM caroussel where filename = ?"
    static addImg = "INSERT INTO caroussel (filename) VALUES (?)"
}
module.exports = carouselSql;