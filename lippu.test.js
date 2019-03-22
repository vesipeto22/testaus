const lippu = require('./lippu');

test('Alle 7v', () => {
    expect(lippu(7)).toBe('0€');
});

test('7-16v', () => {
    expect(lippu(15)).toBe('1€');
});

test('16-25v', () => {
    expect(lippu(18)).toBe('1.5€');
});

test('25v+', () => {
    expect(lippu(43)).toBe('3€');
});

test('65v+', () => {
    expect(lippu(67)).toBe('1.5€');
});


test('Olettaa että ikä on kirjaimia', () => {
    expect(() => {
    lippu()}).toThrow('ei luku');
});