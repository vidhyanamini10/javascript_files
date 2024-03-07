function isRotation(str1, str2) {
    // Check if lengths are different or both are empty
    if (str1.length !== str2.length || str1.length === 0 || str2.length === 0) {
        return false;
    }

    // Concatenate str1 with itself
    let concatenated = str1 + str1;

    // Check if str2 is a substring of concatenated str1
    if (concatenated.includes(str2)) {
        return true;
    } else {
        return false;
    }
}

// Test the function
let str1 = "JavaJ2eeStrutsHibernate";
let str2 = "StrutsHibernateJavaJ2ee";
console.log("Input strings:");
console.log("String 1:", str1);
console.log("String 2:", str2);
console.log("Output:", isRotation(str1, str2));
