const words = [
    { english: "apple", turkish: "elma" },
    { english: "book", turkish: "kitap" },
    { english: "cat", turkish: "kedi" },
    { english: "dog", turkish: "köpek" },
    { english: "elephant", turkish: "fil" },
    { english: "flower", turkish: "çiçek" },
    { english: "guitar", turkish: "gitar" },
    { english: "house", turkish: "ev" },
  
    { english: "jacket", turkish: "ceket" },
    { english: "car", turkish: "araba" },
    { english: "tree", turkish: "ağaç" },
    { english: "water", turkish: "su" },
    { english: "phone", turkish: "telefon" },
    { english: "computer", turkish: "bilgisayar" },
    { english: "hair", turkish: "saç" },
    { english: "ear", turkish: "kulak" },
    { english: "root", turkish: "kök" },
    { english: "hill", turkish: "tepe" },
    { english: "lake", turkish: "göl" },
    { english: "snow", turkish: "kar" },
    { english: "rain", turkish: "yağmur" },
    { english: "island", turkish: "ada" },
    { english: "fire", turkish: "ateş" },
    { english: "star", turkish: "yıldız" },
    { english: "sky", turkish: "gökyüzü" },
    { english: "eye", turkish: "göz" },
    { english: "bus", turkish: "otobüs" },
    { english: "train", turkish: "tren" },
    { english: "sea", turkish: "deniz" },
    { english: "river", turkish: "nehir" },
    { english: "jacket", turkish: "ceket" },
    { english: "garden", turkish: "bahçe" },
    { english: "coffee", turkish: "kahve" },
    { english: "tea", turkish: "çay" },
    { english: "food", turkish: "yiyecek" },
    { english: "cup", turkish: "fincan" },
    { english: "door", turkish: "kapı" },
    { english: "table", turkish: "masa" },
    { english: "music", turkish: "müzik" },
    { english: "house", turkish: "ev" },
    { english: "city", turkish: "şehir" }

];

document.addEventListener("DOMContentLoaded", () => {
    const wordListContainer = document.querySelector(".word-list");

    words.forEach(item => {
        const wordElement = document.createElement("div");
        wordElement.className = "word";
        wordElement.textContent = item.english;
        wordElement.onclick = () => showTranslation(item.english, item.turkish);
        wordListContainer.appendChild(wordElement);
    });
});

function showTranslation(english, turkish) {
    const translationContainer = document.getElementById("translation");
    translationContainer.innerHTML = `<strong>${english}:</strong> ${turkish}`;

    const utterance = new SpeechSynthesisUtterance(english);
    utterance.lang = "en-US";
    speechSynthesis.speak(utterance);
}
