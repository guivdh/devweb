const axios = require('axios');

const functions = {
    getMatch: () => axios.get('http://51.75.126.62:3000/match')
        .then(body => body.data)
        .catch(err => 'error'),

    getUtilisateur: () => axios.get('http://51.75.126.62:3000/utilisateur')
        .then(body => body.data)
        .catch(err => 'error'),

    getEvent: () => axios.get('http://51.75.126.62:3000/event/1')
        .then(body => body.data)
        .catch(err => 'err'),
}

module.exports = functions;