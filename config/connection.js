var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'us-cdbr-iron-east-05.cleardb.net',
    user: 'bb303858c9495a',
    password: '77fa95c6',
    database: 'heroku_e301e12199c36f9'
});

connection.connect(function(err){
    if(err)throw err;
    console.log("connected as id: " + connection.threadId)
});
//export database connection in connection variable
module.exports = connection;