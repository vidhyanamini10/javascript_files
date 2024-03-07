function reverseWords(sentence) {
    // Split the sentence into words
    let words = sentence.split(" ");

    // Reverse each word in the array
    let reversedWords = words.map(word => {
        return word.split("").reverse().join("");
    });

    // Join the reversed words back into a sentence
    let reversedSentence = reversedWords.join(" ");

    return reversedSentence;
}

// Test the function
let inputSentence = "Java J2EE Reverse Me";
let outputSentence = reverseWords(inputSentence);
console.log("Input: ", inputSentence);
console.log("Output:", outputSentence);
