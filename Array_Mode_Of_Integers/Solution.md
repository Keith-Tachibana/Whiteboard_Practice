```JavaScript
function checkForMostInt(arr) {
	if (arr.length === 0) {
		return null;
	}
	var obj = {};
	var maxCount = 0;
	var maxNumber = arr[0];
	for (var i = 0; i < arr.length; i++) {
		var aNumber = arr[i];
		if (obj[aNumber] === undefined) {
			obj[aNumber] = 1;
		} else {
			obj[aNumber]++;
		}
		if (obj[aNumber] > maxCount) {
			maxNumber = aNumber;
			maxCount = obj[aNumber];
		}
	}
	return maxNumber;
}
```