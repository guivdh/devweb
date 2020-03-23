const express = require('express');
const bodyParser = require('body-parser');
var mysql = require('mysql');
//const Thing = require('./models/Thing');

var con = mysql.createConnection({
    host: "localhost",
    port: "3308",
    user: "root",
    password: "",
    database: "database1",
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.get('/utilisateur', (req, res) => {
    con.query("SELECT * FROM utilisateur",(err,rows,fields)=> {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});



app.get('/utilisateur/:id', (req, res) => {
    con.query("SELECT * FROM utilisateur WHERE matricule = ?",[req.params.id],(err,rows,fields)=> {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

app.delete('/utilisateur/:id', (req, res) => {
    con.query("DELETE utilisateur WHERE matricule = ?",[req.params.id],(err,rows,fields)=> {
        if (!err)
            res.send('Delete successfully');
        else
            console.log(err);
    })
});

//rest api to create a new record into mysql database
app.post('/utilisateur', function (req, res) {
    var postData  = req.body;
    console.log(postData['Matricule']);
    var sql = "INSERT INTO utilisateur VALUES ("+"'"+postData['Matricule']+"',"+"'"+postData['Nom']+"',"+"'"+postData['Prenom']+"',"+"'"+postData['AdresseMail']+"',"+"'"+postData['MotDePasse']+"',"+"'"+postData['EstResponsable']+"')";
    console.log(sql);
    con.query(sql, postData, function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
});

module.exports = app;