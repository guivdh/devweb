const functions = require('./functions');
var mysql = require('mysql');

test('test db connection', async () => {
    var con = mysql.createConnection({
        host: "localhost",
        port: "3306",
        user: "root",
        password: "devweb",
        database: "database1",
    });
    con.connect(function(err) {
        expect(err).toBeNull();
    });
})

test('getMatch 0 Description sould be la finale de la coupe de ping-pong', () => {
    return functions.getMatch()
        .then(data => {
            expect(data[0]["Description"]).toEqual("la finale de la coupe de ping-pong");
        })
});

test('getUtilisateur should be erreur d\'authentification', () => {
    return functions.getUtilisateur()
        .then(data => {
            expect(data).toEqual("Erreur d'authentification !");
        })
});

test('getEvent 0 starTime should be 2020-04-23 08:00:00', () => {
   return functions.getEvent()
       .then(data => {
           expect(data[0]['StartTime']).toEqual("2020-04-23T06:00:00.000Z");
       })
});
