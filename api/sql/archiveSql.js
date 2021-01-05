class archiveSql {
    static postArchive = "INSERT INTO archive (text,galerie_name,title,date,filename) VALUES (?)";
    static getAll = `SELECT * FROM archive`;
    static postRating = "INSERT INTO archive_rating (filename, rating) VALUES (?)";
    static getAverage(filename) {
        return `SELECT CAST(AVG(rating) AS decimal(10,2)) FROM archive_rating where filename ="${filename}";`

    }
}
module.exports = archiveSql;