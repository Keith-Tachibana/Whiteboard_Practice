# Wildcard Search
Write 2 functions. The first one, called "setup", whose arguments are multiple strings, puts those string(s) into an array.
The second one, called "isMember", whose argument is a string, returns true if it is contained in the setup array and false if it doesn't.
However, it will also return true if one of the characters is a wildcard * and the rest of the characters are the same.
## Input:
setup(strings)
isMember(string)
## Output:
"setup" outputs an array.
"isMember" outputs true or false.
## Example:
setup('foo', 'bar', 'baz');
isMember('foo') --> true
isMember('bar') --> true
isMember('baz') --> true
isMember('gho') --> false
isMember('f*o') --> true
