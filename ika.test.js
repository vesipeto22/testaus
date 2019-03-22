const ika = require('./ika');

test('Olettaa että ikä on yli 18', () => {
    expect(ika(19)).toBe(true);
});

test('Olettaa että ikä on alle 18', () => {
    expect(ika(17)).toBe(false);
});

test('Olettaa että ikä tasan 18', () => {
    expect(ika(18)).toBe(true);
});

test('Olettaa että ikä on kirjaimia', () => {
    expect(() => {
    ika()}).toThrow('ei luku');
});

