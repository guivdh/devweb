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

exports.createUtilisateur = function (req, res) {
    var postData  = req.body;
    bcrypt.hash(postData['MotDePasse'], 10, function(err, hash){
        var sql = "INSERT INTO utilisateur VALUES ("+"'"+postData['Matricule']+"',"+"'"+postData['Nom']+"',"+"'"+postData['Prenom']+"',"+"'"+postData['AdresseMail']+"',"+"'"+hash+"',"+"'"+postData['EstResponsable']+"')";
        console.log(sql);
        con.query(sql, postData, function (error, results, fields) {
            if (error) throw error;
            res.end("Utilisateur créé");
        });
    })
};

exports.updateUtilisateur = function (req, res) {
    var postData  = req.body;
    var sql = "UPDATE utilisateur SET "+postData['colonne']+" = '" + postData["nouvelElement"] + "' WHERE " + postData['colonne']+" = '" + postData["ancientElement"] + "'";
    console.log(sql);
    con.query(sql, postData, function (error, results, fields) {
        if (error) throw error;
        res.end("Data updated");
    });
};

exports.deleteUtilisateur = function (req, res) {
    var postData  = req.body;
    var sql = "DELETE FROM utilisateur WHERE "+postData['colonne']+" = '" + postData["elementSupprimer"] + "'";
    console.log(sql);
    con.query(sql, postData, function (error, results, fields) {
        if (error) throw error;
        res.end("Data deleted");
    });
};

exports.getIdUtilisateur = (req, res) => {
    con.query("SELECT * FROM utilisateur WHERE matricule = ?",[req.params.id],(err,rows,fields)=> {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
};

exports.getUtilisateur = (req, res) => {
    con.query("SELECT * FROM utilisateur",(err,rows,fields)=> {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
};

exports.login = (req, res) => {
    var postData  = req.body;
    console.log(req.body);
    con.query("SELECT * FROM utilisateur WHERE AdresseMail = " + "'" + postData['AdresseMail'] + "'",postData, function (error, results, fields) {
        if (error) {
            return res.status(401).json({error: 'Utilisateur non trouvé!'});
        }
        bcrypt.compare(postData['MotDePasse'], results[0]['MotDePasse'], function(err,result){
            if(result == false){
                return res.status(401).json({error: 'Mot de passe incorrect!'});
            }
            else {
                res.status(200).json({
                    matricule: results[0]['Matricule'],
                    token: jwt.sign(
                        {Matricule: results[0]['Matricule']},
                        'RANDOM_TOKEN_SECRET',
                        {expiresIn: '24h'}
                    )
                });
            }
        })

    })
};
