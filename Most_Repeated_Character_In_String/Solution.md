```JavaScript
function maxOccurringChar(str) {
  if (str.length === 0) {
   return null; 
  }
  if (str.length === 1) {
   return str; 
  }
  const lowercaseStr = str.toLowerCase();
  const emptyHashTable = {};
  let maxChar = lowercaseStr[0];
  let maxCount = 0;
  for (let i = 0; i < lowercaseStr.length; i++) {
    let currentChar = lowercaseStr[i];
    if (!emptyHashTable[currentChar]) {
      emptyHashTable[currentChar] = 0;
    }
    emptyHashTable[currentChar]++;
    if (emptyHashTable[currentChar] > maxCount) {
      maxChar = currentChar;
      maxCount = emptyHashTable[currentChar];
    } else if (emptyHashTable[currentChar] === maxCount) {
    	maxChar += ' and ' + currentChar;
    	maxCount = emptyHashTable[currentChar]; 
    }
  }
  return maxChar;
}
```

















}