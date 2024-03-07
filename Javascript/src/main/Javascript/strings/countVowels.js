function countVowels(str) {
    // Convert the string to lowercase to handle both uppercase and lowercase vowels
    str = str.toLowerCase();

    // Define a string containing all vowels
    const vowels = "aeiou";

    // Initialize a counter to store the count of vowels
    let count = 0;

    // Loop through each character in the string
    for (let char of str) {
        // If the current character is a vowel, increment the counter
        if (vowels.includes(char)) {
            count++;
        }
    }

    // Return the total count of vowels
    return count;
}

// Example usage:
const inputString = "Hello World";
const vowelCount = countVowels(inputString);
console.log("Number of vowels:", vowelCount); // Output: 3
