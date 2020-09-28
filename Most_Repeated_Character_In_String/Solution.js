// SOL 1:


function returnMode(arr) {
	if (arr.length === 0) {
		return null;
	}
	const emptyObj = {};
	let largestCount = 0;
	let largestNum = arr[0];
	for (let i = 0; i < arr.length; i++) {
		let currentNum = arr[i];
		emptyObj[currentNum]++;
		if (emptyObj[currentNum] > largestCount) {
			largestNum = currentNum;
			largestCount = emptyObj[currentNum];
		}
	}
	return largestNum;
}


// SOL 2:


function repeatingChar(str) {
	if (str.length === 0) {
		return null;
	}
	const emptyObj = {};
	const modesArr = [];
	let largestCount = 0;
	let mostRepeatedChar = str[0];
	for (let i = 0; i < str.length; i++) {
		let currentChar = str[i];
		emptyObj[currentChar]++;
		if (emptyObj[currentChar] > largestCount) {
			largestCount = emptyObj[currentChar];
			mostRepeatedChar = currentChar;
			modesArr.push(mostRepeatedChar);
		} else if (emptyObj[currentChar] === largestCount) {
			mostRepeatedChar = currentChar;
			modesArr.push(mostRepeatedChar);
		}
	}
	return modesArr;
}


// SOL 3:


var arr1 = [1,3,54,56,6,6,1,6];
var obj = {};

/* first convert the array in to object with unique elements and number of times each element is repeated */
for(var i = 0; i < arr1.length; i++)
{
   var x = arr1[i];
   if(!obj[x])
     obj[x] = 1;
   else 
     obj[x]++;
}

console.log(obj);//just for reference

/* now traverse the object to get the element */
var index = 0;
var max = 0;

for(var obIndex in obj)
{
  if(obj[obIndex] > max)
  {
    max = obj[obIndex];
    index = obIndex;
  }
}
console.log(index+" got maximum time repeated, with "+ max +" times" );