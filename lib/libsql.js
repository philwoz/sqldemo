const mysql = require("mysql");

class SQL {
    constructor(host, user, password, database) {
        this.connection = mysql.createConnection({host, user, password, database});
    }

    select(fn, name) {
        const query = (name) ? "SELECT * FROM employee_detail_csv WHERE name = ?;" : "SELECT * FROM employee_detail_csv;";
        this.connection.query(query, [name], fn); 
    }
}

module.exports = SQL;