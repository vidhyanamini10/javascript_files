function areAnagrams(str1, str2) {
    // Remove spaces and convert both strings to lowercase
    str1 = str1.replace(/\s/g, '').toLowerCase();
    str2 = str2.replace(/\s/g, '').toLowerCase();

    // If the lengths of the strings are different, they cannot be anagrams
    if (str1.length !== str2.length) {
        return false;
    }

    // Convert both strings to arrays, sort them alphabetically, and convert back to strings
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    // Compare the sorted strings
    return sortedStr1 === sortedStr2;
}

// Example usage:
const string1 = "listen";
const string2 = "silent";
const result = areAnagrams(string1, string2);
console.log("Are the strings anagrams?", result); // Output: true
