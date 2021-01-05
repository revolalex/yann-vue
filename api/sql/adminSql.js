class adminSql {
    static signUp = "INSERT INTO admin (name, is_super_admin, password, email, url) VALUES (?)";
    static signIn(name) {
        return `SELECT * FROM admin where name ='${name}';`;
    }
}
module.exports = adminSql;