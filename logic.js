const texts = ["I write clean code.", "I build modern designs.", "I deliver real solutions.", "Let's work together!"];
let index = 0;
let currentText = "";
let letterIndex = 0;
let isTyping = true;

const dynamicText = document.getElementById("dynamic-text");

function type() {
    if (isTyping) {
        if (letterIndex < texts[index].length) {
            currentText += texts[index].charAt(letterIndex);
            dynamicText.textContent = currentText;
            letterIndex++;
            setTimeout(type, 100); // Adjust typing speed here
        } else {
            isTyping = false; // Switch to backspacing
            setTimeout(backspace, 500); // Wait before starting to backspace
        }
    }
}

function backspace() {
    if (!isTyping) {
        if (letterIndex > 0) {
            currentText = currentText.slice(0, -1);
            dynamicText.textContent = currentText;
            letterIndex--;
            setTimeout(backspace, 100); // Adjust backspacing speed here
        } else {
            isTyping = true; // Switch back to typing
            index = (index + 1) % texts.length; // Cycle through the texts
            setTimeout(type, 250); // Wait before starting to type the next text
        }
    }
}

// Start the typing animation
type();