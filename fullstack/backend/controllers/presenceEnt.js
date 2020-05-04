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

exports.getPresenceEnt = (req, res) => {
    con.query("SELECT * FROM database1.presenceEnt",(err,rows,fields)=> {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
};

exports.getIdPresenceEnt =  (req, res) => {
    con.query("SELECT * FROM database1.presenceEnt WHERE IdJoueur = ?",[req.params.id],(err,rows,fields)=> {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
};

exports.createPresenceEnt =  (req, res) => {
    var postData  = req.body;
    var sql = "INSERT INTO database1.presenceEnt VALUES ("+"'"+postData['IdJoueur']+"',"+"'"+postData['IdEnt']+"',"+"'"+postData['presence']+"')";
    console.log(sql);
    con.query(sql, postData, function (error, results, fields) {
        if (error) throw error;
        res.end("presenceEnt créé");
    });
};

exports.deletePresenceEnt =  (req, res) => {
    var postData  = req.body;
    var sql = "DELETE FROM database1.presenceEnt WHERE "+postData['colonne']+" = '" + postData["elementSupprimer"] + "'";
    console.log(sql);
    con.query(sql, postData, function (error, results, fields) {
        if (error) throw error;
        res.end("Data deleted");
    });
};

exports.updatePresenceEnt =  (req, res) => {
    var postData  = req.body;
    var sql = "UPDATE database1.presenceEnt SET "+postData['colonne']+" = '" + postData["nouvelElement"] + "' WHERE " + postData['colonne']+" = '" + postData["ancientElement"] + "'";
    console.log(sql);
    con.query(sql, postData, function (error, results, fields) {
        if (error) throw error;
        res.end("Data updated");
    });
};