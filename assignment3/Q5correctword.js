function correctfn(sentence, wrong, correct) {
    return sentence.replace(wrong, correct);
}

// Example
let str = "I love Pythan programming.";
console.log(correctfn(str, "Pythan", "Python"));