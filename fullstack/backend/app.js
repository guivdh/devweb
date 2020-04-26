const express = require('express');
const bodyParser = require('body-parser');
var mysql = require('mysql');
const fs = require('file-system');
const utilisateurRoutes = require('./routes/utilisateur');
const matchRoutes = require('./routes/match');
const mailRoutes = require('./routes/mail');
const entrainementRoutes = require('./routes/entrainement');
const eventRoutes = require('./routes/event');
const presenceEntRoutes = require('./routes/presenceEnt');
const presenceEventRoutes = require('./routes/presenceEvent');
const presenceMatchRoutes = require('./routes/presenceMatch');
const nodeMailer = require('nodemailer');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Page web d'utilisation de l'api
app.get('/', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('content/index.html', null, function (error, data) {
        if (error) {
            res.writeHead(404);
            res.write('Whoops! File not found!');
        } else {
            res.write(data);
        }
        res.end();
    });
});

app.use('/utilisateur', utilisateurRoutes);
app.use('/match', matchRoutes);
app.use('/mail',mailRoutes);
app.use('/entrainement',entrainementRoutes);
app.use('/event',eventRoutes);
app.use('/presenceEnt',presenceEntRoutes);
app.use('/presenceEvent',presenceEventRoutes);
app.use('/presenceMatch',presenceMatchRoutes);

module.exports = app;