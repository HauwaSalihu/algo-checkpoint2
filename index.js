function insertionSort(arr) {
  let n = arr.length;

  // Start from the second element (index 1) as the first element is considered sorted
  for (let i = 1; i < n; i++) {
    let key = arr[i]; // The element to be inserted
    let j = i - 1;

    // Move elements of arr[0..i-1], that are greater than key, to one position ahead of their current position
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    // Insert the key at its correct position
    arr[j + 1] = key;
  }

  return arr;
}

// Example usage:
let arr = [12, 11, 13, 5, 6];
console.log("Original array:", arr);

let sortedArray = insertionSort(arr);
console.log("Sorted array:", sortedArray);
