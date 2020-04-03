```JavaScript
function bubbleSort(array) {
  let swapped = true;
  const firstChecked, secondChecked;
  do {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      firstChecked = array[i];
      secondChecked = array[i + 1];
      if (firstChecked > secondChecked) {
        array[i] = secondChecked;
        array[i + 1] = firstChecked;
        swapped = true;
      }
    }
  } while (swapped);
  return array;
}
```