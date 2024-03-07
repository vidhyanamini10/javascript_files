function reverseArray(arr) {
    let reversedArray = [];

    // Iterate through the array in reverse order and push elements into reversedArray
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }

    return reversedArray;
}

// Test the function
let originalArray = [1, 2, 3, 4, 5];
console.log("Original array:", originalArray);
let reversedArray = reverseArray(originalArray);
console.log("Reversed array:", reversedArray);
