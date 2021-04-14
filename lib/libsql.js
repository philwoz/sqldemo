const mysql = require("mysql");

class SQL {
    constructor(host, user, password, database) {
        this.connection = mysql.createConnection({ host, user, password, database });
    }

    select(name, fn) {
        this.connection.query(
            "SELECT * FROM employee_detail_csv WHERE name = ?;",
            [name],
            fn
        );
    }
}

module.exports = SQL;