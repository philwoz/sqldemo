const SQL = require("./lib/libsql");

console.log('Hello world, gonna try database stuff!');

/* There's no place like 127.0.0.1 */
const db = new SQL("127.0.0.1", "root", "PASSWORD", "db");
db.select((error, results) => {
    if (error) {
        throw error
    } else {
        for (let result of results) {
            console.log(`User is called: ${result.Name} and they are ${result.gender}`);
        }
        process.exit();
    }
});
