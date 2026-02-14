// İlerleme takibi fonksiyonu
let progress = {
    "software-development": 0,
    "mathematics": 0,
    "language-learning": 0,
    "art": 0
};

// İlerleme güncelleme fonksiyonu
function updateProgress(subject) {
    if (progress[subject] < 100) {
        progress[subject]++;
    }
    console.log(`${subject} ilerlemesi: ${progress[subject]}%`);
}

// Test tamamlandığında ilerlemeyi güncelle
function completeTest(subject) {
    updateProgress(subject);
}
