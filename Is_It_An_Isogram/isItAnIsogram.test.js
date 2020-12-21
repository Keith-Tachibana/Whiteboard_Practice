const myFunctions = require('./isItAnIsogram-Solution');

test('Input ice should return true', () => {
    expect(myFunctions.isIsogram('ice')).toStrictEqual(true);
});

test('Input cherry should return false', () => {
    expect(myFunctions.isIsogram('cherry')).toStrictEqual(false);
});

test('Empty string should return null', () => {
    expect(myFunctions.isIsogram('')).toStrictEqual(null);
});