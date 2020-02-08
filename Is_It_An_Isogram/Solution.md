function isIsogram(str) {
	let strLower = str.toLowerCase();
	for (let i = 0; i < strLower.length; i++) {
		for (let j = i+1; j < strLower.length; j++) {
			if (strLower[i] === strLower[j]) {
				return false;
			}
		}
	}
	return true;
}