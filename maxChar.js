// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(string) {
  let charMostSeen = '';
  const hashMap = {};
  let highestOccurrence = 0;
  for (let i = 0; i < string.length; i++) {
    let currentChar = string[i];
    if (!hashMap[currentChar]) {
      hashMap[currentChar] = 1;
    } else {
      hashMap[currentChar]++;
    }
  }
  for (let char in hashMap) {
    if (hashMap[char] > highestOccurrence) {
      charMostSeen = char;
      highestOccurrence = hashMap[char];
    }
  }
  console.log(charMostSeen);
}

maxChar('aaaaapplllllllllllllllle');
