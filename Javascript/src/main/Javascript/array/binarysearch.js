function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // Check if the target is present at the middle
        if (arr[mid] === target) {
            return mid;
        }

        // If target is greater, ignore the left half
        if (arr[mid] < target) {
            left = mid + 1;
        }
        // If target is smaller, ignore the right half
        else {
            right = mid - 1;
        }
    }

    // If the target is not present in the array
    return -1;
}

// Test the function
let numbers = [2, 3, 4, 10, 40, 50, 60];
let target = 10;
console.log("Array:", numbers);
console.log("Searching for:", target);
let index = binarySearch(numbers, target);
if (index !== -1) {
    console.log("Element found at index:", index);
} else {
    console.log("Element not found in the array.");
}
