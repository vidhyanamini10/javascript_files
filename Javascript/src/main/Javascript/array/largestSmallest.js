function findLargestAndSmallest(arr) {
    // Check if the array is empty
    if (arr.length === 0) {
        return "Array is empty.";
    }

    let largest = arr[0];
    let smallest = arr[0];

    // Iterate through the array to find the largest and smallest numbers
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        } else if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    return { largest, smallest };
}

// Test the function
let numbers = [12, 54, 7, 32, 65, 2, 87];
console.log("Input array:", numbers);
let result = findLargestAndSmallest(numbers);
console.log("Largest number:", result.largest);
console.log("Smallest number:", result.smallest);
