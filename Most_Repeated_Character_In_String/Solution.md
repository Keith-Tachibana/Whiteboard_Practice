```JavaScript
function maxRepeatedChar(str) {
	if (str.length === 0) {
		return null;
	}
	if (str.length === 1) {
		return str;
	}
	let maxCount = 0, emptyObj = {}, emptyArr = [];
	for (let i = 0; i < str.length; i++) {
		let currentChar = str[i];
		if (!emptyObj[currentChar]) {
			emptyObj[currentChar] = 1;
		} else {
			emptyObj[currentChar]++;
		}
	}
	for (let keys in emptyObj) {
		if (emptyObj[keys] > maxCount) {
			emptyArr = [];
			emptyArr.push(keys);
			maxCount = emptyObj[keys];
		} else if (emptyObj[keys] === maxCount) {
			emptyArr.push(keys);
		}
	}
	return emptyArr;
}
```
