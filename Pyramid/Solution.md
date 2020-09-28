```JavaScript
function makePyramid(numRows) {
	var asteriskCount = numRows * 2 - 1;
	var spaceCount = 0;
	var pyramidArray = [];
	for (var i = 0; i <= numRows; i++) {
		var currentRow = " ".repeat(spaceCount) + "*".repeat(asteriskCount) + " ".repeat(spaceCount);
		pyramidArray.unshift(currentRow);
		spaceCount++;
		asteriskCount -= 2;
	}
	return pyramidArray;
}
```