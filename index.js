const SQL = require("./lib/libsql");

console.log("hello world");

const db = new SQL("127.0.0.1", "root", "PASSWORD", "db");
// parameters to be saved in .env file
db.select("Laura", (error, results) => {
    if (error) {
        throw error;
    } else {
        console.log(results);
        process.exit();
    }
});
