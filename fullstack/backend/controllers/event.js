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

exports.getEvent = (req, res) => {
    con.query("SELECT * FROM database1.event",(err,rows,fields)=> {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
};

exports.getIdEvent =  (req, res) => {
    con.query("SELECT * FROM database1.event WHERE Id = ?",[req.params.id],(err,rows,fields)=> {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
};

exports.createEvent =  (req, res) => {
    var postData  = req.body;
    var sql = "INSERT INTO database1.event VALUES ("+"'"+postData['Id']+"',"+"'"+postData['StartTime']+"',"+"'"+postData['EndTime']+"',"+"'"+postData['Titre']+"',"+"'"+postData['Description']+"')";
    console.log(sql);
    con.query(sql, postData, function (error, results, fields) {
        if (error) throw error;
        res.end("Event créé");
    });
};

exports.deleteEvent =  (req, res) => {
    var postData  = req.body;
    var sql = "DELETE FROM database1.event WHERE "+postData['colonne']+" = '" + postData["elementSupprimer"] + "'";
    console.log(sql);
    con.query(sql, postData, function (error, results, fields) {
        if (error) throw error;
        res.end("Data deleted");
    });
};

exports.updateEvent =  (req, res) => {
    var postData  = req.body;
    var sql = "UPDATE database1.event SET "+postData['colonne']+" = '" + postData["nouvelElement"] + "' WHERE " + postData['colonne']+" = '" + postData["ancientElement"] + "'";
    console.log(sql);
    con.query(sql, postData, function (error, results, fields) {
        if (error) throw error;
        res.end("Data updated");
    });
};