const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(req.headers.authorization, 'RANDOM_TOKEN_SECRET');
        const matricule = decodedToken.Matricule;
        if (req.body['Matricule'] && req.body['Matricule'] == !Matricule) {
            throw 'Invalid user ID';
        } else {
            next();
        }
    }
    catch(error){
        res.end("Erreur d'authentification !");
    }
}