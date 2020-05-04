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

exports.getPresenceEvent = (req, res) => {
    con.query("SELECT * FROM database1.presenceEvent",(err,rows,fields)=> {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
};

exports.getIdPresenceEvent =  (req, res) => {
    con.query("SELECT * FROM database1.presenceEvent WHERE IdJoueur = ?",[req.params.id],(err,rows,fields)=> {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
};

exports.createPresenceEvent =  (req, res) => {
    var postData  = req.body;
    var sql = "INSERT INTO database1.presenceEvent VALUES ("+"'"+postData['IdJoueur']+"',"+"'"+postData['IdEvent']+"',"+"'"+postData['presence']+"')";
    console.log(sql);
    con.query(sql, postData, function (error, results, fields) {
        if (error) throw error;
        res.end("presenceEvent créé");
    });
};

exports.deletePresenceEvent =  (req, res) => {
    var postData  = req.body;
    var sql = "DELETE FROM database1.presenceEvent WHERE "+postData['colonne']+" = '" + postData["elementSupprimer"] + "'";
    console.log(sql);
    con.query(sql, postData, function (error, results, fields) {
        if (error) throw error;
        res.end("Data deleted");
    });
};

exports.updatePresenceEvent =  (req, res) => {
    var postData  = req.body;
    var sql = "UPDATE database1.presenceEvent SET "+postData['colonne']+" = '" + postData["nouvelElement"] + "' WHERE " + postData['colonne']+" = '" + postData["ancientElemEvent"] + "'";
    console.log(sql);
    con.query(sql, postData, function (error, results, fields) {
        if (error) throw error;
        res.end("Data updated");
    });
};