const holaMundo = require('../src/index');

test('Debe retornar Hola Mundo', () => {
    expect(holaMundo()).toBe('Hola Mundo');
});