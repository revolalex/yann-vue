class carouselSql {
    static deleteImg = "DELETE FROM caroussel where filename = ?"
    static getAll = `SELECT * FROM caroussel`
    static addImg = "INSERT INTO caroussel (filename) VALUES (?)"
    static updateEmail(email, specify) {
        return `UPDATE admin SET email = "${specify}"  WHERE email = "${email}"`
    }
}
module.exports = carouselSql;