const myFunctions = require('./Solution');

test('Input aaabbbcddd should return ["a", "b", "d"]', () => {
   expect(myFunctions.maxRepeatedChar('aaabbbcddd')).toStrictEqual(['a', 'b', 'd']);
});

test('Input a should return "a"', () => {
   expect(myFunctions.maxRepeatedChar('a')).toStrictEqual('a');
});

test('Empty string should return null', () => {
   expect(myFunctions.maxRepeatedChar('')).toStrictEqual(null);
});