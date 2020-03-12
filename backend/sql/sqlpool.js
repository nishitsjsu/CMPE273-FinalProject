var mysql = require('mysql');

var con = mysql.createConnection({
  host: "#",
  user: "admin",
  password: "cmpe273twitter",
  database: "innodb"
});


module.exports = con ;
