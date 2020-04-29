const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "devweb",
    database: "database1",
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

exports.getMatch = (req, res) => {
    con.query("SELECT * FROM database1.match",(err,rows,fields)=> {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
};

exports.getIdMatch =  (req, res) => {
    con.query("SELECT * FROM database1.match WHERE Id = ?",[req.params.id],(err,rows,fields)=> {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
};

exports.createMatch =  (req, res) => {
    var postData  = req.body;
    var sql = "INSERT INTO database1.match VALUES ("+"'"+postData['Id']+"',"+"'"+postData['StartTime']+"',"+"'"+postData['EndTime']+"',"+"'"+postData['Titre']+"',"+"'"+postData['Description']+"')";
    console.log(sql);
    con.query(sql, postData, function (error, results, fields) {
        if (error) throw error;
        res.end("Match créé");
    });
};

exports.deleteMatch =  (req, res) => {
    var postData  = req.body;
    var sql = "DELETE FROM database1.match WHERE "+postData['colonne']+" = '" + postData["elementSupprimer"] + "'";
    console.log(sql);
    con.query(sql, postData, function (error, results, fields) {
        if (error) throw error;
        res.end("Data deleted");
    });
};

exports.updateMatch =  (req, res) => {
    var postData  = req.body;
    var sql = "UPDATE database1.match SET "+postData['colonne']+" = '" + postData["nouvelElement"] + "' WHERE " + postData['colonne']+" = '" + postData["ancientElement"] + "'";
    console.log(sql);
    con.query(sql, postData, function (error, results, fields) {
        if (error) throw error;
        res.end("Data updated");
    });
};