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
    con.query("INSERT INTO utilisateur",(err,rows,fields)=> {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

/*
* INSERT INTO `database1`.`utilisateur`
(`Matricule`,
`Nom`,
`Prenom`,
`AdresseMail`,
`MotDePasse`,
`EstResponsable`)
VALUES
(<{Matricule: }>,
<{Nom: }>,
<{Prenom: }>,
<{AdresseMail: }>,
<{MotDePasse: }>,
<{EstResponsable: }>);

* */

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

app.post('/utilisateur', (req, res) => {
    console.log("Requête : " + req.body);
    con.query( "INSERT INTO utilisateur values (+ sdqs +"`",[req.params.id],(err,rows,fields)=> {
        if (!err)
            res.send('Delete successfully');
        else
            console.log(err);
    })
});

module.exports = app;