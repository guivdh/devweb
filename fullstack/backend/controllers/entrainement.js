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

exports.getEntrainement = (req, res) => {
    con.query("SELECT * FROM database1.entrainement",(err,rows,fields)=> {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
};

exports.getIdEntrainement =  (req, res) => {
    con.query("SELECT * FROM database1.entrainement WHERE Id = ?",[req.params.id],(err,rows,fields)=> {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
};

exports.createEntrainement =  (req, res) => {
    var postData  = req.body;
    var sql = "INSERT INTO database1.entrainement VALUES ("+"'"+postData['Id']+"',"+"'"+postData['StartTime']+"',"+"'"+postData['EndTime']+"',"+"'"+postData['Titre']+"',"+"'"+postData['Description']+"')";
    console.log(sql);
    con.query(sql, postData, function (error, results, fields) {
        if (error) throw error;
        res.end("Entrainement créé");
    });
};

exports.deleteEntrainement =  (req, res) => {
    var postData  = req.body;
    var sql = "DELETE FROM database1.entrainement WHERE "+postData['colonne']+" = '" + postData["elementSupprimer"] + "'";
    console.log(sql);
    con.query(sql, postData, function (error, results, fields) {
        if (error) throw error;
        res.end("Data deleted");
    });
};

exports.updateEntrainement =  (req, res) => {
    var postData  = req.body;
    var sql = "UPDATE database1.entrainement SET "+postData['colonne']+" = '" + postData["nouvelElement"] + "' WHERE " + postData['colonne']+" = '" + postData["ancientElement"] + "'";
    console.log(sql);
    con.query(sql, postData, function (error, results, fields) {
        if (error) throw error;
        res.end("Data updated");
    });
};