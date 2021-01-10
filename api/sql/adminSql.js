class adminSql {
    static signUp = "INSERT INTO admin (name, is_super_admin, password, email, url) VALUES (?)";
    static signIn(name) {
        return `SELECT * FROM admin where name ='${name}';`;
    }
    static createAdmins = `INSERT Ignore INTO admin (id, name, is_super_admin, password, email, url) VALUES (?)`
    static updateEmail(email, specify) {
        return `UPDATE admin SET email = "${specify}"  WHERE email = "${email}"
        `
    }
}
module.exports = adminSql;