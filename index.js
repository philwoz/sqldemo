const express = require("express");
require('dotenv').config();

const SQL = require("./lib/libsql");

const db = new SQL("127.0.0.1", "root", "PASSWORD", "db");

const app = express();

app.use(express.json());

app.get('/users/all', (req, res) => {
    db.select((error, results) => {
        if (error) res.status(500).send({message: 'something wrong'});

        res.status(200).send(results);
    });

});

app.get('/users/name', (req, res) => {
    db.select((error, results) => {
        if (error) res.status(500).send({message: 'something wrong'});

        res.status(200).send(results);
    }, req.body);
    
})

app.listen(3000);

/* There's no place like 127.0.0.1 */
















// console.log('Hello world, gonna try database stuff!');
// db.select((error, results) => {
//     if (error) {
//         throw error
//     } else {
//         for (let result of results) {
//             console.log(`User is called: ${result.Name} and they are ${result.gender}`);
//         }
//         process.exit();
//     }
// }, "Laura");

// db.create((error, results) => {
//     if (error) throw error;
//     console.log(results);
//     process.exit();
// }, ['1000','Developer', 20991232, 20991252 ])

// db.update((error, results) => {
//     if (error) throw error;
//     console.log(results);

// }, "Senior Developer", 1002)

// db.delete((error, results) => {
//     if (error) throw error;
//     console.log(results);
// }, 1001)


