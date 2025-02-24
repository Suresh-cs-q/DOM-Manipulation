// Improved DOM Manipulation Challenge Script

// Selecting DOM elements
const countH2btn = document.getElementById("count-h2");
const change1Btn = document.getElementById("change-h1");
const toggleClassBtn = document.getElementById("toggle-class");
const changeInputBtn = document.getElementById("change-input");
const addListItemBtn = document.getElementById("add-list-item");
const removeListItemBtn = document.getElementById("remove-list-item");
const addItalicTextBtn = document.getElementById("add-italic");

const outputDiv = document.getElementById("output");
const mainHeading = document.querySelector(".main-heading");
const userInput = document.getElementById("user-input");
const itemList = document.getElementById("item-list");
const dynamicSection = document.querySelector(".dynamic-section");

// Count the number of <h2> elements on the page and display the count
countH2btn.addEventListener("click", () => {
    const h2Count = document.getElementsByTagName("h2").length;
    // Using outputDiv (correct element) instead of undefined variable
    outputDiv.textContent = `There are ${h2Count} <h2> elements on this page.`;
});

// Change the main heading text and provide user feedback
change1Btn.addEventListener("click", () => {
    mainHeading.textContent = "Welcome to the DOM Challenge!";
    outputDiv.textContent = "Main heading updated successfully.";
});

// Toggle the 'highlight' class on the output div for visual emphasis
toggleClassBtn.addEventListener("click", () => {
    outputDiv.classList.toggle("highlight");
});

// Toggle the input field between text and password types with updated button text
changeInputBtn.addEventListener("click", () => {
    if (userInput.type === "text") {
        userInput.setAttribute("type", "password");
        changeInputBtn.textContent = "Change Input to Text";
    } else {
        userInput.setAttribute("type", "text");
        changeInputBtn.textContent = "Change Input to Password";
    }
});

// Append a new list item to the item list
addListItemBtn.addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.textContent = "I'm a new list item!";
    itemList.appendChild(newItem);
});

// Remove the last list item; alert if none remain
removeListItemBtn.addEventListener("click", () => {
    if (itemList.lastElementChild) {
        itemList.removeChild(itemList.lastElementChild);
    } else {
        alert("No items left to remove");
    }
});

// Append italicized text to the dynamic section with a fade-in animation
addItalicTextBtn.addEventListener("click", () => {
    const italicText = document.createElement("i");
    italicText.textContent = "This text is italicized!";
    dynamicSection.appendChild(italicText);
});
