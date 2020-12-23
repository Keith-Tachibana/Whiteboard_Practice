const myFunctions = require("./wildcardSearch-Solution");

test('Input to setup, "foo", "bar", "baz", should return ["foo", "bar", "baz"]', () => {
   expect(myFunctions.setup('foo', 'bar', 'baz')).toStrictEqual(['foo', 'bar', 'baz']);
});

test('Input to isMember, "foo", should return true', () => {
   expect(myFunctions.isMember('foo')).toStrictEqual(true);
});

test('Input to isMember, "bar", should return true', () => {
   expect(myFunctions.isMember('bar')).toStrictEqual(true);
});
