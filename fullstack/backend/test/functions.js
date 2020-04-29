var mysql = require('mysql');
const http = require('http');
const axios = require('axios');
var con = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "devweb",
    database: "database1",
});

con.connect(function(err) {
    if (err) throw err;
    //console.log("Connected!");
});

const functions = {
    add: function (num1, num2) {
        return num1 + num2;
    },
    min: function (num1, num2) {
        return num1-num2;
    },
    getMatch: () => axios.get('http://51.75.126.62:3000/match')
        .then(body => body.data)
        .catch(err => 'error')
}

module.exports = functions;