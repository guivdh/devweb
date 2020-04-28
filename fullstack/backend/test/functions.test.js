const functions = require('./functions');



test('adds 2 + 2 to equal 4', () => {
    expect(functions.add(2,2)).toBe(4);
});

test('min 5 - 2 to equal 3', () => {
    expect(functions.min(5,2)).toBe(3);
});

/*test('get match list', () => {
    return functions..then(data => {
        expect(data.anme).toEqual('Leanne Graham');
    });
});*/

test('getMatch 0 Description sould be la finale de la coupe de ping-pong', () => {
    return functions.getMatch()
        .then(data => {
            expect(data[0]["Description"]).toEqual("la finale de la coupe de ping-pong");
        })
})