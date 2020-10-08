```JavaScript
function firstNonRepeatingChar(str) {
	for (let i = 0; i < str.length; i++) {
		let seenDuplicate = false;
		for (let j = 0; j < str.length; j++) {
			if ((str[i] === str[j]) && (i !== j)) {
				seenDuplicate = true;
				break;
			}
		}
		if (!seenDuplicate) {
			return str[i];
		}
	}
	return '_';
}

function firstNonRepeatingCharUsingHashMap(str) {
	const hashMap = {};
	for (let i = 0; i < str.length; i++) {
		let currentChar = str[i];
		if (!hashMap[currentChar]) {
			hashMap[currentChar] = 0;
		}
		hashMap[currentChar]++;
	}
	for (let i = 0; i < str.length; i++) {
		let result = str[i];
		if (hashMap[result] === 1) {
			return result;
		}
	} 
}
```