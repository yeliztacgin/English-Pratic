const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

document.addEventListener("DOMContentLoaded", () => {
    const alphabetContainer = document.querySelector(".alphabet-container");

    alphabet.forEach(letter => {
        const letterElement = document.createElement("div");
        letterElement.className = "letter";
        letterElement.textContent = letter;
        letterElement.onclick = () => pronounceLetter(letter);
        alphabetContainer.appendChild(letterElement);
    });
});

function pronounceLetter(letter) {
    const output = document.getElementById("output");
    output.textContent = `You selected: ${letter}`;

    const utterance = new SpeechSynthesisUtterance(letter);
    utterance.lang = "en-US";
    speechSynthesis.speak(utterance);
}
