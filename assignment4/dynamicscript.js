const textEl = document.getElementById("text-container");
const colorInput = document.getElementById("colorbox");
const colorBtn = document.getElementById("colorchange");
const fontSizeInput = document.getElementById("fontsize");
const italicBtn = document.getElementById("italic");
const underlineBtn = document.getElementById("underline");
const boldBtn = document.getElementById("bold");
const fontList = document.getElementById("list");
const getStyleBtn = document.getElementById("getstyle");
const cssPropsP = document.getElementById("css-props");

// Change color
colorBtn.addEventListener("click", () => {
    const c = colorInput.value.trim();
    if (c) textEl.style.color = c;
});

// Change font size
fontSizeInput.addEventListener("input", () => {
    textEl.style.fontSize = fontSizeInput.value + "px";
});

// Toggle italics
italicBtn.addEventListener("click", () => {
    textEl.style.fontStyle =
        textEl.style.fontStyle === "italic" ? "normal" : "italic";
});

// Toggle underline
underlineBtn.addEventListener("click", () => {
    textEl.style.textDecoration =
        textEl.style.textDecoration === "underline" ? "none" : "underline";
});

// Toggle bold
boldBtn.addEventListener("click", () => {
    textEl.style.fontWeight =
        textEl.style.fontWeight === "bold" ? "normal" : "bold";
});

// Change font family
fontList.addEventListener("change", () => {
    textEl.style.fontFamily = fontList.value;
});

// Get and display CSS properties
getStyleBtn.addEventListener("click", () => {
    const style = window.getComputedStyle(textEl);
    const props = [
        `color: ${style.color};`,
        `font-size: ${style.fontSize};`,
        `font-family: ${style.fontFamily};`,
        `text-decoration: ${style.textDecorationLine};`,
        `font-style: ${style.fontStyle};`,
        `font-weight: ${style.fontWeight};`
    ];
    cssPropsP.textContent = props.join(" ");
});