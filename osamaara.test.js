const osamaara = require('./osamaara');

test('Tasalukujen jako: 4 / 2 = 2', () => {
    expect(osamaara(4, 2)).toBe(2);
});

test('Tasalukujen jako, tulos ei tasaluku: 3 / 2 = 1.5', () => {
    expect(osamaara(3, 2)).toBe(1.5);
});

test('Ei tasalukujen jako: 10 / 2.5 = 4', () => {
    expect(osamaara(10, 2.5)).toBe(4);
});

test('Nollalla jako.', () => {
    expect(() => {
        osamaara(0, 2)}).toThrow('nollalla jako');
});

test('Olettaa että ikä on kirjaimia', () => {
    expect(() => {
    osamaara()}).toThrow('ei luku');
});