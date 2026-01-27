function createDiv(width, height, text) {
    // Get the container element
    const container = document.getElementById("container");

    // Create a new div
    const newDiv = document.createElement("div");

    // Set size in px
    newDiv.style.width = width + "px";
    newDiv.style.height = height + "px";

    // Add text
    newDiv.textContent = text;

    // Optional: add a class for style
    newDiv.classList.add("created-div");

    // Add the new div to the container
    container.appendChild(newDiv);
}

// Example: create a few divs
createDiv(100, 50, "Box 1");
createDiv(120, 80, "Hello World");
createDiv(150, 100, "JS DOM!");