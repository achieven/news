const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ngraa000',
    database: 'news'
});

module.exports = connection.promise();
