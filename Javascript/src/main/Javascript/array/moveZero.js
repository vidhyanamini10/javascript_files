function moveZerosToEnd(numbers) {
    // Initialize a pointer to keep track of the position to place the next non-zero element
    let nonZeroIndex = 0;

    // Iterate through the array
    for (let i = 0; i < numbers.length; i++) {
        // If the current element is non-zero, move it to the nonZeroIndex position and increment the pointer
        if (numbers[i] !== 0) {
            numbers[nonZeroIndex] = numbers[i];
            nonZeroIndex++;
        }
    }

    // Fill the remaining positions with zeros
    for (let i = nonZeroIndex; i < numbers.length; i++) {
        numbers[i] = 0;
    }

    return numbers;
}

// Test the function
let numbers = [0, 1, 0, 3, 12];
console.log("Original array:", numbers);
console.log("Array after moving zeros to end:", moveZerosToEnd(numbers));
