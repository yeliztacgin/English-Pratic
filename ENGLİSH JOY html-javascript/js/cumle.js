const sentences = [
    { turkish: "Merhaba", english: "Hello" },
    { turkish: "Günaydın", english: "Good morning" },
    { turkish: "İyi geceler", english: "Good night" },
    { turkish: "Teşekkür ederim", english: "Thank you" },
    { turkish: "Lütfen", english: "Please" },
    { turkish: "Evet", english: "Yes" },
    { turkish: "Hayır", english: "No" },
    { turkish: "Nasılsınız?", english: "How are you?" },
    { turkish: "Ben iyiyim", english: "I am fine" },
    { turkish: "Seni seviyorum", english: "I love you" },
    { turkish: "Affedersiniz", english: "Excuse me" },
    { turkish: "Yardım eder misiniz?", english: "Can you help me?" },
    { turkish: "Nerede?", english: "Where?" },
    { turkish: "Ne zaman?", english: "When?" },
    { turkish: "Neden?", english: "Why?" }
];

document.addEventListener("DOMContentLoaded", () => {
    const sentenceContainer = document.querySelector(".sentence-container");

    sentences.forEach((sentence, index) => {
        const sentenceItem = document.createElement("div");
        sentenceItem.className = "sentence-item";

        const label = document.createElement("label");
        label.textContent = `${index + 1}. ${sentence.turkish}`;

        const input = document.createElement("input");
        input.type = "text";
        input.name = `sentence-${index}`;
        input.dataset.english = sentence.english;

        sentenceItem.appendChild(label);
        sentenceItem.appendChild(input);
        sentenceContainer.appendChild(sentenceItem);
    });
});

function checkAnswers() {
    const inputs = document.querySelectorAll(".sentence-item input");
    let correctCount = 0;

    inputs.forEach(input => {
        const userAnswer = input.value.trim().toLowerCase();
        const correctAnswer = input.dataset.english.trim().toLowerCase();

        if (!userAnswer) {
            input.style.borderColor = "orange";
            input.placeholder = "Boş bırakmayınız";
        } else if (userAnswer === correctAnswer) {
            correctCount++;
            input.style.borderColor = "green";
        } else {
            input.style.borderColor = "red";
        }
    });

    document.getElementById("result").textContent = `Doğru Sayısı: ${correctCount} / ${inputs.length}`;
}
