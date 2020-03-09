const express = require('express');

const app = express();

app.use('/api/stuff', (req, res, next) => {
    const stuff = [
        {
            _id: '1',
            date: '21/02/1552',
            heure: '20:00',
            participants: 'Pierre, Jacques',
        },
        {
            _id: '2',
            date: '24/04/1552',
            heure: '10:00',
            participants: 'Julien, Loic',
        },
    ];
    res.status(200).json(stuff);
});

module.exports = app;