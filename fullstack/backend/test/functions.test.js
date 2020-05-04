const functions = require('./functions');



test('adds 2 + 2 to equal 4', () => {
    expect(functions.add(2,2)).toBe(4);
});

test('min 5 - 2 to equal 3', () => {
    expect(functions.min(5,2)).toBe(3);
});

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
