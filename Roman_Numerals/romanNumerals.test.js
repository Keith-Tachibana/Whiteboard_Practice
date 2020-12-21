const myFunctions = require('./romanNumerals-Solution');

test('Input 9 should return "IX"', () => {
    expect(myFunctions.romanNumerals(9)).toStrictEqual('IX');
});

test('Input 4 should return "IV"', () => {
    expect(myFunctions.romanNumerals(4)).toStrictEqual('IV');
});

test('Input 0 should return null', () => {
    expect(myFunctions.romanNumerals(0)).toStrictEqual(null);
});