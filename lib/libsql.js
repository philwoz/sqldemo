const mysql = require("mysql");

class SQL {
    constructor(host, user, password, database) {
        this.connection = mysql.createConnection({host, user, password, database});
    }

    select(fn, name) {
        const query = (name) ? "SELECT * FROM employee_detail_csv WHERE name = ?;" : "SELECT * FROM employee_detail_csv;";
        this.connection.query(query, [name], fn); 
    }

    create(fn, details){
        const query = "INSERT INTO jobs_history_csv VALUES (?,?,?,?)";
        this.connection.query(query, details, fn);
    }

    update(fn, title, id){
        const query = "UPDATE current_job_detail_csv SET job_title = ? WHERE employee_id = ?";
        this.connection.query(query, [title, id], fn)
    }
}

module.exports = SQL;