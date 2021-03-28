const myFunctions = require('./findSecondHighestNumber-Solution');

test('Input [2, 1, 5, 4] should return 4', () => {
    expect(myFunctions.findSecondHighestInteger([2, 1, 5, 4])).toEqual(4);
});

test('Input [] should return null', () => {
    expect(myFunctions.findSecondHighestInteger([])).toStrictEqual(null);
});