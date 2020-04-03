```JavaScript
function minLength(arr) {
	return arr.reduce(function(a, b) {
		return (a.length < b.length) ? a : b;
	})
}
```