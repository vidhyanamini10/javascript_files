function rotateLeft(arr, x) {
    let rotatedArray = [];

    // Calculate the index from which to start the rotation
    let rotationIndex = x % arr.length;

    // Rotate the array elements
    for (let i = rotationIndex; i < arr.length; i++) {
        rotatedArray.push(arr[i]);
    }
    for (let i = 0; i < rotationIndex; i++) {
        rotatedArray.push(arr[i]);
    }

    return rotatedArray;
}

// Test the function
let inputArray = [1, 2, 3, 4, 5, 6, 7];
let x = 2;
console.log("Original array:", inputArray);
console.log("Number of positions to rotate:", x);
console.log("Rotated array:", rotateLeft(inputArray, x));
