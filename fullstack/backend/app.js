const express = require('express');
const bodyParser = require('body-parser');
var mysql = require('mysql');
const Thing = require('./models/Thing');

var con = mysql.createConnection({
    host: "localhost",
    port: "3308",
    user: "root",
    password: ""
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

app.post('/api/stuff', (req, res, next) => {
    delete req.body._id;
    const thing = new Thing({
        ...req.body
    });
    thing.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
        .catch(error => res.status(400).json({ error }));
});

app.put('api/stuff/:id', (req, res, next) => {
    Thing.update({ _id: 1 }, { price: 10 })
        .then(() => res.status(200).json({message: 'Objet modifié !'}))
        .catch(error => res.status(404).json({ error }));
});

app.delete('api/stuff/:id', (req, res, next) => {
    Thing.delete({_id: req.params.id})
        .then(() => res.status(200).json({message: 'Objet supprimé !'}))
        .catch(error  => res.status(400).json({error}));
})

app.get('/api/stuff/:id', (req, res, next) => {
    Thing.findOne({ _id: req.params.id })
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(404).json({ error }));
});

app.use('/api/stuff', (req, res, next) => {
    Thing.findAll()
        .then(things => res.status(200).json(things))
        .catch(error => res.status(400).json({ error }));
});


module.exports = app;