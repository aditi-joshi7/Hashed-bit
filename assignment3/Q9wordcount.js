function countWords(paragraph) {
    return paragraph.trim().split(/\s+/).length;
}

// Example
let text = "JavaScript is very easy to learn and powerful";
console.log(countWords(text));