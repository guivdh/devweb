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

exports.getPresenceMatch = (req, res) => {
    con.query("SELECT * FROM database1.presenceMatch",(err,rows,fields)=> {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
};

exports.getIdpresenceMatch =  (req, res) => {
    con.query("SELECT * FROM database1.presenceMatch WHERE IdJoueur = ?",[req.params.id],(err,rows,fields)=> {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
};

exports.createPresenceMatch =  (req, res) => {
    var postData  = req.body;
    var sql = "INSERT INTO database1.presenceMatch VALUES ("+"'"+postData['IdJoueur']+"',"+"'"+postData['IdMatch']+"',"+"'"+postData['presence']"')";
    console.log(sql);
    con.query(sql, postData, function (error, results, fields) {
        if (error) throw error;
        res.end("presenceMatch créé");
    });
};

exports.deletepresenceMatch =  (req, res) => {
    var postData  = req.body;
    var sql = "DELETE FROM database1.presenceMatch WHERE "+postData['colonne']+" = '" + postData["elementSupprimer"] + "'";
    console.log(sql);
    con.query(sql, postData, function (error, results, fields) {
        if (error) throw error;
        res.end("Data deleted");
    });
};

exports.updatepresenceMatch =  (req, res) => {
    var postData  = req.body;
    var sql = "UPDATE database1.presenceMatch SET "+postData['colonne']+" = '" + postData["nouvelElement"] + "' WHERE " + postData['colonne']+" = '" + postData["ancientElemMatch"] + "'";
    console.log(sql);
    con.query(sql, postData, function (error, results, fields) {
        if (error) throw error;
        res.end("Data updated");
    });
};