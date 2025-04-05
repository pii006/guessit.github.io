// Data game
const wordData = {
    fruits: {
        easy: ["apel", "pisang", "jeruk", "mangga", "melon", "anggur", "pepaya", "semangka", "nanas", "duku"],
        medium: ["durian", "rambutan", "salak", "nangka", "sirsak", "markisa", "jambu", "kelapa", "belimbing", "sawo"],
        hard: ["kesemek", "manggis", "sukun", "cempedak", "bisbul", "kawista", "gandaria", "jamblang", "kecapi", "menteng"]
    },
    animals: {
        easy: ["kucing", "anjing", "burung", "ular", "tikus", "ayam", "bebek", "kambing", "sapi", "kelinci"],
        medium: ["harimau", "gajah", "jerapah", "kangguru", "panda", "zebra", "singa", "kuda", "kerbau", "monyet"],
        hard: ["komodo", "tapir", "trenggiling", "kuskus", "banteng", "anoa", "babirusa", "cendrawasih", "jalak", "kakatua"]
    },
    places: {
        easy: ["rumah", "kantor", "sekolah", "pasar", "taman", "mall", "masjid", "gereja", "hotel", "apotek"],
        medium: ["bandara", "stasiun", "terminal", "museum", "klinik", "kampus", "pabrik", "restoran", "toko", "kafe"],
        hard: ["perpustakaan", "observatorium", "planetarium", "aquarium", "konservatori", "laboratorium", "auditorium", "planetarium", "galeri", "perguruan"]
    }
};

const questionData = {
    fruits: {
        apel: "Buah ini sering disebut dalam cerita putri salju, warnanya bisa merah atau hijau",
        pisang: "Buah kuning yang dikonsumsi oleh atlet untuk energi cepat",
        jeruk: "Buah dengan vitamin C tinggi, kulitnya berwarna oranye",
        mangga: "Buah musiman yang manis, ada jenis harum manis dan gedong",
        melon: "Buah besar berdaging hijau atau oranye, sangat menyegarkan",
        anggur: "Buah kecil bergerombol yang bisa dibuat wine",
        pepaya: "Buah tropis dengan biji hitam, baik untuk pencernaan",
        semangka: "Buah besar berair dengan daging merah dan kulit bergaris",
        nanas: "Buah dengan mahkota daun di atasnya, rasanya manis asam",
        duku: "Buah kecil berkelompok dengan kulit kuning dan rasa manis",
        durian: "Disebut raja buah dengan bau menyengat dan kulit berduri",
        rambutan: "Buah dengan kulit berambut merah ketika matang",
        salak: "Disebut snake fruit karena kulitnya bersisik seperti ular",
        nangka: "Buah besar dengan kulit berduri kecil, daging kuning beraroma kuat",
        sirsak: "Buah hijau berduri lembut dengan daging putih dan biji hitam",
        markisa: "Buah kecil dengan kulit ungu/kuning, berisi biji yang bisa dimakan",
        jambu: "Buah dengan banyak biji kecil di tengah, ada yang merah dan putih",
        kelapa: "Buah dengan tempurung keras, air dan dagingnya bisa dimakan",
        belimbing: "Buah berbentuk bintang ketika dipotong, rasanya asam-manis",
        sawo: "Buah coklat dengan daging lembut manis, sering dibuat jus",
        kesemek: "Buah oranye yang rasanya manis dan sedikit sepat",
        manggis: "Buah ungu dengan mahkota di bawah, disebut ratu buah",
        sukun: "Buah tanpa biji yang sering digoreng atau direbus sebagai makanan",
        cempedak: "Mirip nangka tetapi lebih kecil dan aromanya lebih tajam",
        bisbul: "Disebut buah mentega karena tekstur dagingnya seperti mentega",
        kawista: "Buah langka dengan kulit keras, dagingnya kecoklatan dan manis",
        gandaria: "Buah asli Indonesia dengan rasa manis-asam, kulitnya kuning",
        jamblang: "Buah kecil ungu kehitaman, rasanya sepat-manis",
        kecapi: "Buah dengan kulit kuning dan daging manis-asam, bijinya besar",
        menteng: "Buah kecil bulat dengan kulit kuning, rasanya asam-manis"
    },
    animals: {
        kucing: "Hewan peliharaan populer yang suka mengeong dan punya kumis",
        anjing: "Sahabat manusia yang setia dan bisa menggonggong",
        burung: "Hewan bersayap yang bisa terbang dan berkicau",
        ular: "Hewan melata tanpa kaki, ada yang berbisa dan tidak",
        tikus: "Hewan pengerat kecil yang sering dianggap hama",
        ayam: "Unggas yang sering diternakkan untuk daging dan telurnya",
        bebek: "Unggas berparuh lebar yang bisa berenang di air",
        kambing: "Hewan ternak bertanduk yang suka memakan rumput",
        sapi: "Hewan ternak besar penghasil susu dan daging",
        kelinci: "Hewan kecil bertelinga panjang yang suka wortel",
        harimau: "Kucing besar dengan loreng oranye-hitam, predator puncak",
        gajah: "Hewan darat terbesar dengan belalai panjang dan taring gading",
        jerapah: "Hewan dengan leher sangat panjang dan bercak-bercak di tubuh",
        kangguru: "Hewan marsupial Australia yang melompat dan memiliki kantong",
        panda: "Beruang hitam-putih pemakan bambu, lambang WWF",
        zebra: "Hewan seperti kuda dengan garis-garis hitam putih di tubuh",
        singa: "Disebut raja hutan, kucing besar dengan surai untuk jantan",
        kuda: "Hewan yang sering digunakan untuk transportasi dan olahraga",
        kerbau: "Hewan bertanduk besar yang sering membantu membajak sawah",
        monyet: "Hewan primata yang pandai memanjat dan suka buah",
        komodo: "Kadal raksasa asli Indonesia, termasuk hewan purba",
        tapir: "Hewan dengan belalai pendek, tubuh hitam-putih seperti panda",
        trenggiling: "Hewan bersisik yang bisa menggulung tubuhnya",
        kuskus: "Hewan marsupial nokturnal asli Indonesia bagian timur",
        banteng: "Hewan liar seperti sapi dengan warna coklat kemerahan",
        anoa: "Hewan endemik Sulawesi yang mirip kerbau kecil",
        babirusa: "Babi liar dengan taring melengkung ke atas menembus moncong",
        cendrawasih: "Burung surga dengan bulu warna-warni yang indah",
        jalak: "Burung berkicau yang pandai menirukan suara manusia",
        kakatua: "Burung berjambul putih yang bisa menirukan suara"
    },
    places: {
        rumah: "Tempat tinggal keluarga dengan kamar, dapur, dan ruang tamu",
        kantor: "Tempat orang bekerja dan melakukan aktivitas bisnis",
        sekolah: "Tempat belajar siswa dengan guru dan kelas",
        pasar: "Tempat jual beli kebutuhan sehari-hari, biasanya ramai pagi hari",
        taman: "Area terbuka dengan tanaman dan tempat duduk untuk bersantai",
        mall: "Pusat perbelanjaan besar dengan banyak toko dan restoran",
        masjid: "Tempat ibadah umat Islam dengan kubah dan menara",
        gereja: "Tempat ibadah umat Kristen dengan salib di bagian atas",
        hotel: "Tempat menginap sementara dengan kamar dan fasilitas layanan",
        apotek: "Tempat membeli obat-obatan dengan resep dokter",
        bandara: "Tempat pesawat lepas landas dan mendarat, ada terminalnya",
        stasiun: "Tempat kereta api berhenti dan berangkat, ada peronnya",
        terminal: "Tempat berkumpulnya bus untuk keberangkatan dan kedatangan",
        museum: "Tempat menyimpan benda bersejarah untuk edukasi",
        klinik: "Fasilitas kesehatan kecil untuk berobat ringan",
        kampus: "Lingkungan perguruan tinggi dengan fakultas dan perpustakaan",
        pabrik: "Bangunan industri tempat memproduksi barang dalam jumlah besar",
        restoran: "Tempat makan dengan menu lengkap dan pelayanan",
        toko: "Tempat berjualan berbagai macam barang kebutuhan",
        kafe: "Tempat santai yang menyajikan kopi dan makanan ringan",
        perpustakaan: "Tempat koleksi buku yang bisa dipinjam untuk dibaca",
        observatorium: "Bangunan dengan teleskop untuk mengamati benda langit",
        planetarium: "Teater untuk pertunjukan edukasi tentang astronomi",
        aquarium: "Tempat memamerkan berbagai kehidupan air dalam akuarium",
        konservatori: "Lembaga atau tempat untuk pelestarian alam/seni",
        laboratorium: "Ruang dengan peralatan untuk penelitian dan eksperimen",
        auditorium: "Ruang besar untuk pertunjukan atau acara dengan banyak penonton",
        galeri: "Ruang pameran untuk karya seni atau fotografi",
        perguruan: "Lembaga pendidikan atau tempat latihan bela diri"
    }
};

const numberData = {
    easy: { range: [1, 50], clue: "Angka antara 1 dan 50" },
    medium: { range: [1, 100], clue: "Angka antara 1 dan 100" },
    hard: { range: [1, 500], clue: "Angka antara 1 dan 500" }
};

const saveDataStructure = {
    highScores: {
        word: { easy: 0, medium: 0, hard: 0 },
        number: { easy: 0, medium: 0, hard: 0 }
    },
    gameHistory: []
};

let gameState = {
    currentGame: "word",
    score: 0,
    timeLeft: 30,
    hintsLeft: 2,
    timer: null,
    currentWord: "",
    currentCategory: "fruits",
    currentDifficulty: "medium",
    targetNumber: 0,
    gameActive: false,
    revealedLetters: [],
    usedClues: []
};

let gameData = { ...saveDataStructure };

const elements = {
    gameTitle: document.getElementById("gameTitle"),
    score: document.getElementById("score"),
    timer: document.getElementById("timer"),
    hintCount: document.getElementById("hintCount"),
    difficulty: document.getElementById("difficulty"),
    category: document.getElementById("category"),
    hint: document.getElementById("hint"),
    guess: document.getElementById("guess"),
    submit: document.getElementById("submit"),
    result: document.getElementById("result"),
    clueButton: document.getElementById("clueButton"),
    newWord: document.getElementById("newWord"),
    history: document.getElementById("history"),
    switchGame: document.getElementById("switchGame"),
    giveup: document.getElementById("giveup"),
    reset: document.getElementById("reset"),
    letterDisplay: document.getElementById("letterDisplay"),
    clueContainer: document.getElementById("clueContainer"),
    questionClue: document.getElementById("questionClue"),
    firstLetterClue: document.getElementById("firstLetterClue"),
    middleLetterClue: document.getElementById("middleLetterClue"),
    lastLetterClue: document.getElementById("lastLetterClue")
};

function initGame() {
    gameData = loadGameData();
    updateUI();
    setupEventListeners();
    startNewGame();
    
    const statsButton = document.createElement('button');
    statsButton.id = 'statsButton';
    statsButton.className = 'btn';
    statsButton.innerHTML = '📊 Statistik';
    statsButton.addEventListener('click', showGameStats);
    document.querySelector('.game-controls').appendChild(statsButton);
}

function loadGameData() {
    const savedData = localStorage.getItem('wordNumberGameData');
    return savedData ? JSON.parse(savedData) : { ...saveDataStructure };
}

function saveGameData() {
    localStorage.setItem('wordNumberGameData', JSON.stringify(gameData));
}

function updateUI() {
    elements.score.textContent = gameState.score;
    elements.timer.textContent = gameState.timeLeft;
    elements.hintCount.textContent = gameState.hintsLeft;
    
    if (gameState.timeLeft <= 10) {
        elements.timer.classList.add("danger");
        elements.timer.classList.remove("warning");
    } else if (gameState.timeLeft <= 20) {
        elements.timer.classList.add("warning");
        elements.timer.classList.remove("danger");
    } else {
        elements.timer.classList.remove("danger", "warning");
    }
    
    elements.switchGame.textContent = gameState.currentGame === "word" ? "Coba Tebak Angka" : "Coba Tebak Kata";
    
    if (gameState.currentGame === "word") {
        elements.gameTitle.textContent = "Tebak Kata";
        elements.category.style.display = "inline-block";
        elements.hint.textContent = `Tebak kata dari kategori ${translateCategory(gameState.currentCategory)}!`;
        elements.clueContainer.style.display = "block";
        updateLetterDisplay();
    } else {
        elements.gameTitle.textContent = "Tebak Angka";
        elements.category.style.display = "none";
        elements.hint.textContent = `Tebak angka antara ${numberData[gameState.currentDifficulty].range[0]} dan ${numberData[gameState.currentDifficulty].range[1]}!`;
        elements.clueContainer.style.display = "none";
    }
    
    elements.guess.value = "";
    elements.guess.focus();
}

function updateLetterDisplay() {
    if (gameState.currentGame !== "word") return;
    
    let display = "";
    const word = gameState.currentWord;
    
    for (let i = 0; i < word.length; i++) {
        if (gameState.revealedLetters.includes(i)) {
            display += `<span class="revealed-letter">${word[i].toUpperCase()}</span>`;
        } else {
            display += "_";
        }
        display += " ";
    }
    
    elements.letterDisplay.innerHTML = display;
}

function translateCategory(category) {
    const translations = {
        fruits: "Buah-buahan",
        animals: "Hewan",
        places: "Tempat"
    };
    return translations[category] || category;
}

function setupEventListeners() {
    elements.submit.addEventListener("click", handleGuess);
    elements.guess.addEventListener("keypress", (e) => {
        if (e.key === "Enter") handleGuess();
    });
    
    elements.clueButton.addEventListener("click", giveClue);
    elements.newWord.addEventListener("click", startNewGame);
    elements.switchGame.addEventListener("click", switchGame);
    elements.giveup.addEventListener("click", giveUp);
    elements.reset.addEventListener("click", resetGame);
    elements.history.addEventListener("click", showFullHistory);
    
    elements.difficulty.addEventListener("change", () => {
        gameState.currentDifficulty = elements.difficulty.value;
        startNewGame();
    });
    
    elements.category.addEventListener("change", () => {
        gameState.currentCategory = elements.category.value;
        startNewGame();
    });
}

function startNewGame() {
    clearInterval(gameState.timer);
    
    if (gameState.currentGame === "word") {
        const words = wordData[gameState.currentCategory][gameState.currentDifficulty];
        gameState.currentWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
        gameState.revealedLetters = [];
        gameState.usedClues = [];
        
        updateQuestionAndClues();
        elements.hint.textContent = `Tebak kata dari kategori ${translateCategory(gameState.currentCategory)}!`;
    } else {
        const range = numberData[gameState.currentDifficulty].range;
        gameState.targetNumber = Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0];
        gameState.usedClues = [numberData[gameState.currentDifficulty].clue];
        
        elements.hint.textContent = `Tebak angka antara ${range[0]} dan ${range[1]}!`;
    }
    
    gameState.timeLeft = getTimeBasedOnDifficulty();
    gameState.hintsLeft = 2;
    gameState.gameActive = true;
    
    updateUI();
    startTimer();
}

function updateQuestionAndClues() {
    const word = gameState.currentWord;
    
    if (questionData[gameState.currentCategory] && questionData[gameState.currentCategory][word]) {
        elements.questionClue.textContent = `Soal: ${questionData[gameState.currentCategory][word]}`;
    } else {
        elements.questionClue.textContent = `Soal: Tebak kata ${gameState.currentDifficulty} dari kategori ${translateCategory(gameState.currentCategory)}`;
    }
    
    elements.firstLetterClue.textContent = `Huruf pertama: ${word[0].toUpperCase()}`;
    
    const middlePos = Math.floor(word.length / 2);
    elements.middleLetterClue.textContent = `Huruf tengah: ${word.length % 2 === 0 ? 
        `${word[middlePos-1].toUpperCase()} dan ${word[middlePos].toUpperCase()}` : 
        word[middlePos].toUpperCase()}`;
        
    elements.lastLetterClue.textContent = `Huruf terakhir: ${word[word.length-1].toUpperCase()}`;
}

function getTimeBasedOnDifficulty() {
    switch(gameState.currentDifficulty) {
        case 'easy': return 60;
        case 'medium': return 45;
        case 'hard': return 25;
        default: return 30;
    }
}

function startTimer() {
    clearInterval(gameState.timer);
    gameState.timer = setInterval(() => {
        gameState.timeLeft--;
        elements.timer.textContent = gameState.timeLeft;
        
        if (gameState.timeLeft <= 10) {
            elements.timer.classList.add("danger");
            elements.timer.classList.remove("warning");
        } else if (gameState.timeLeft <= 20) {
            elements.timer.classList.add("warning");
            elements.timer.classList.remove("danger");
        }
        
        if (gameState.timeLeft <= 0) {
            clearInterval(gameState.timer);
            timeUp();
        }
    }, 1000);
}

function handleGuess() {
    if (!gameState.gameActive) return;
    
    const guess = elements.guess.value.trim().toLowerCase();
    
    if (!guess) {
        showAlert("Masukkan tebakan Anda terlebih dahulu!", "warning");
        return;
    }
    
    if (gameState.currentGame === "word") {
        handleWordGuess(guess);
    } else {
        handleNumberGuess(guess);
    }
}

function handleWordGuess(guess) {
    if (guess === gameState.currentWord) {
        clearInterval(gameState.timer);
        const scoreEarned = gameState.timeLeft * getDifficultyMultiplier();
        gameState.score += scoreEarned;
        gameState.gameActive = false;
        
        showAlert(`Selamat! Jawaban "${gameState.currentWord.toUpperCase()}" benar! Skor +${scoreEarned}`, "success");
        addResult(`✅ <strong>${gameState.currentWord.toUpperCase()}</strong> - Tebakan benar! (Sisa waktu: ${gameState.timeLeft} detik)`);
        
        updateHighScores();
        addGameHistory('Menang');
        updateUI();
        elements.reset.style.display = "inline-block";
    } else {
        gameState.timeLeft = Math.max(0, gameState.timeLeft - 5);
        
        let feedback = [];
        for (let i = 0; i < gameState.currentWord.length; i++) {
            if (i < guess.length) {
                if (guess[i] === gameState.currentWord[i]) {
                    feedback.push(`<span class="correct-letter">${guess[i].toUpperCase()}</span>`);
                    if (!gameState.revealedLetters.includes(i)) {
                        gameState.revealedLetters.push(i);
                    }
                } else if (gameState.currentWord.includes(guess[i])) {
                    feedback.push(`<span class="partial">${guess[i].toUpperCase()}</span>`);
                } else {
                    feedback.push(`<span class="wrong">${guess[i].toUpperCase()}</span>`);
                }
            } else {
                feedback.push("_");
            }
        }
        
        for (let i = guess.length; i < gameState.currentWord.length; i++) {
            feedback.push("_");
        }
        
        showAlert("Tebakan salah! Perhatikan petunjuk warna huruf.", "warning");
        addResult(`❌ ${feedback.join(" ")} - Tebakan salah! (-5 detik)`);
        updateUI();
        updateLetterDisplay();
    }
}

function handleNumberGuess(guess) {
    const numberGuess = parseInt(guess);
    
    if (isNaN(numberGuess)) {
        showAlert("Masukkan angka yang valid!", "warning");
        return;
    }
    
    const range = numberData[gameState.currentDifficulty].range;
    if (numberGuess < range[0] || numberGuess > range[1]) {
        showAlert(`Angka harus antara ${range[0]} dan ${range[1]}!`, "warning");
        return;
    }
    
    if (numberGuess === gameState.targetNumber) {
        clearInterval(gameState.timer);
        const scoreEarned = gameState.timeLeft * getDifficultyMultiplier();
        gameState.score += scoreEarned;
        gameState.gameActive = false;
        
        showAlert(`Selamat! Angka ${gameState.targetNumber} benar! Skor +${scoreEarned}`, "success");
        addResult(`✅ <strong>${gameState.targetNumber}</strong> - Tebakan benar! (Sisa waktu: ${gameState.timeLeft} detik)`);
        
        updateHighScores();
        addGameHistory('Menang');
        updateUI();
        elements.reset.style.display = "inline-block";
    } else {
        gameState.timeLeft = Math.max(0, gameState.timeLeft - 5);
        
        let hint = numberGuess < gameState.targetNumber ? "terlalu rendah" : "terlalu tinggi";
        showAlert(`Angka ${numberGuess} ${hint}!`, "warning");
        addResult(`❌ ${numberGuess} - ${hint.toUpperCase()} (-5 detik)`);
        updateUI();
    }
}

function getDifficultyMultiplier() {
    switch(gameState.currentDifficulty) {
        case 'easy': return 1;
        case 'medium': return 2;
        case 'hard': return 3;
        default: return 1;
    }
}

function giveClue() {
    if (!gameState.gameActive) {
        showAlert("Mulai game baru terlebih dahulu!", "warning");
        return;
    }
    
    if (gameState.hintsLeft <= 0) {
        showAlert("Anda sudah menggunakan semua petunjuk!", "warning");
        return;
    }
    
    gameState.hintsLeft--;
    
    if (gameState.currentGame === "word") {
        const hiddenIndices = [];
        for (let i = 0; i < gameState.currentWord.length; i++) {
            if (!gameState.revealedLetters.includes(i)) {
                hiddenIndices.push(i);
            }
        }
        
        if (hiddenIndices.length > 0) {
            const randomIndex = hiddenIndices[Math.floor(Math.random() * hiddenIndices.length)];
            gameState.revealedLetters.push(randomIndex);
            updateLetterDisplay();
            
            const letter = gameState.currentWord[randomIndex].toUpperCase();
            showAlert(`Petunjuk: Huruf ke-${randomIndex + 1} adalah ${letter}`, "info");
            addResult(`💡 Petunjuk: Huruf ke-${randomIndex + 1} adalah ${letter}`);
        } else {
            showAlert("Semua huruf sudah terbuka!", "info");
        }
    } else {
        if (gameState.usedClues.length === 1) {
            const clue = gameState.targetNumber % 2 === 0 ? "Angka target adalah genap" : "Angka target adalah ganjil";
            gameState.usedClues.push(clue);
            showAlert(`Petunjuk: ${clue}`, "info");
            addResult(`💡 Petunjuk: ${clue}`);
        } else if (gameState.usedClues.length === 2) {
            const range = numberData[gameState.currentDifficulty].range;
            const quarter = Math.floor((range[1] - range[0]) / 4);
            let clue = "";
            
            if (gameState.targetNumber <= range[0] + quarter) {
                clue = `Angka berada di 25% terendah (${range[0]}-${range[0] + quarter})`;
            } else if (gameState.targetNumber <= range[0] + 2 * quarter) {
                clue = `Angka berada di 25-50% (${range[0] + quarter + 1}-${range[0] + 2 * quarter})`;
            } else if (gameState.targetNumber <= range[0] + 3 * quarter) {
                clue = `Angka berada di 50-75% (${range[0] + 2 * quarter + 1}-${range[0] + 3 * quarter})`;
            } else {
                clue = `Angka berada di 25% tertinggi (${range[0] + 3 * quarter + 1}-${range[1]})`;
            }
            
            gameState.usedClues.push(clue);
            showAlert(`Petunjuk: ${clue}`, "info");
            addResult(`💡 Petunjuk: ${clue}`);
        }
    }
    
    updateUI();
}

function timeUp() {
    gameState.gameActive = false;
    
    if (gameState.currentGame === "word") {
        showAlert(`Waktu habis! Jawabannya adalah "${gameState.currentWord.toUpperCase()}"`, "warning");
        addResult(`⏰ Waktu habis! Jawaban: <strong>${gameState.currentWord.toUpperCase()}</strong>`);
        addGameHistory('Waktu habis');
    } else {
        showAlert(`Waktu habis! Angka yang benar adalah ${gameState.targetNumber}`, "warning");
        addResult(`⏰ Waktu habis! Jawaban: <strong>${gameState.targetNumber}</strong>`);
        addGameHistory('Waktu habis');
    }
    
    elements.reset.style.display = "inline-block";
}

function switchGame() {
    clearInterval(gameState.timer);
    gameState.currentGame = gameState.currentGame === "word" ? "number" : "word";
    gameState.timeLeft = getTimeBasedOnDifficulty();
    startNewGame();
}

function giveUp() {
    if (!gameState.gameActive) {
        showAlert("Tidak ada game yang aktif!", "warning");
        return;
    }
    
    clearInterval(gameState.timer);
    gameState.gameActive = false;
    
    if (gameState.currentGame === "word") {
        showAlert(`Anda menyerah! Jawabannya adalah "${gameState.currentWord.toUpperCase()}"`, "warning");
        addResult(`🏳️ Menyerah! Jawaban: <strong>${gameState.currentWord.toUpperCase()}</strong>`);
        addGameHistory('Menyerah');
    } else {
        showAlert(`Anda menyerah! Angka yang benar adalah ${gameState.targetNumber}`, "warning");
        addResult(`🏳️ Menyerah! Jawaban: <strong>${gameState.targetNumber}</strong>`);
        addGameHistory('Menyerah');
    }
    
    elements.reset.style.display = "inline-block";
}

function resetGame() {
    clearInterval(gameState.timer);
    gameState.gameActive = true;
    gameState.timeLeft = getTimeBasedOnDifficulty();
    gameState.hintsLeft = 2;
    elements.reset.style.display = "none";
    startNewGame();
}

function addResult(message) {
    const resultItem = document.createElement("p");
    resultItem.innerHTML = message;
    elements.result.appendChild(resultItem);
    elements.result.scrollTop = elements.result.scrollHeight;
}

function showAlert(message, type) {
    const existingAlert = document.querySelector(".alert");
    if (existingAlert) existingAlert.remove();
    
    const alert = document.createElement("div");
    alert.className = `alert ${type}`;
    alert.textContent = message;
    document.body.appendChild(alert);
    
    setTimeout(() => {
        alert.remove();
    }, 3000);
}

function updateHighScores() {
    const gameType = gameState.currentGame;
    const difficulty = gameState.currentDifficulty;
    
    if (gameState.score > gameData.highScores[gameType][difficulty]) {
        gameData.highScores[gameType][difficulty] = gameState.score;
        showAlert(`Selamat! Anda mendapatkan skor tertinggi baru untuk ${gameType} level ${difficulty}!`, "success");
    }
    
    saveGameData();
}

function addGameHistory(result) {
    const historyEntry = {
        timestamp: new Date().toISOString(),
        gameType: gameState.currentGame,
        category: gameState.currentCategory,
        difficulty: gameState.currentDifficulty,
        answer: gameState.currentGame === "word" ? gameState.currentWord : gameState.targetNumber,
        score: gameState.score,
        result: result
    };
    
    gameData.gameHistory.push(historyEntry);
    
    if (gameData.gameHistory.length > 50) {
        gameData.gameHistory.shift();
    }
    
    saveGameData();
}

function showFullHistory() {
    if (gameData.gameHistory.length === 0) {
        showAlert("Belum ada data history permainan!", "info");
        return;
    }
    
    const modal = document.createElement("div");
    modal.className = "modal";
    
    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";
    
    const closeBtn = document.createElement("span");
    closeBtn.className = "close";
    closeBtn.innerHTML = "&times;";
    closeBtn.onclick = function() {
        document.body.removeChild(modal);
    };
    
    const title = document.createElement("h2");
    title.textContent = "Riwayat Permainan";
    
    const historyList = document.createElement("div");
    historyList.className = "history-list";
    
    const recentHistory = [...gameData.gameHistory].reverse().slice(0, 20);
    
    recentHistory.forEach((entry, index) => {
        const item = document.createElement("div");
        item.className = "history-item";
        
        const date = new Date(entry.timestamp);
        const formattedDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
        
        item.innerHTML = `
            <div class="history-index">${index + 1}</div>
            <div class="history-detail">
                <p><strong>${entry.gameType === "word" ? "Tebak Kata" : "Tebak Angka"}</strong> - ${formattedDate}</p>
                <p>Kesulitan: ${entry.difficulty}, ${entry.gameType === "word" ? `Kategori: ${translateCategory(entry.category)}` : ''}</p>
                <p>Jawaban: <strong>${entry.answer}</strong>, Hasil: ${entry.result}, Skor: ${entry.score}</p>
            </div>
        `;
        
        historyList.appendChild(item);
    });
    
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(title);
    modalContent.appendChild(historyList);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    window.onclick = function(event) {
        if (event.target == modal) {
            document.body.removeChild(modal);
        }
    };
}

function showGameStats() {
    const modal = document.createElement("div");
    modal.className = "modal";
    
    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";
    
    const closeBtn = document.createElement("span");
    closeBtn.className = "close";
    closeBtn.innerHTML = "&times;";
    closeBtn.onclick = function() {
        document.body.removeChild(modal);
    };
    
    const title = document.createElement("h2");
    title.textContent = "Statistik Permainan";
    
    const stats = calculateGameStats();
    
    const statsContent = document.createElement("div");
    statsContent.className = "stats-content";
    
    const highScoresDiv = document.createElement("div");
    highScoresDiv.className = "stats-section";
    highScoresDiv.innerHTML = `
        <h3>Skor Tertinggi</h3>
        <div class="stats-grid">
            <div class="stats-game-type">
                <h4>Tebak Kata</h4>
                <p>Mudah: ${gameData.highScores.word.easy}</p>
                <p>Sedang: ${gameData.highScores.word.medium}</p>
                <p>Sulit: ${gameData.highScores.word.hard}</p>
            </div>
            <div class="stats-game-type">
                <h4>Tebak Angka</h4>
                <p>Mudah: ${gameData.highScores.number.easy}</p>
                <p>Sedang: ${gameData.highScores.number.medium}</p>
                <p>Sulit: ${gameData.highScores.number.hard}</p>
            </div>
        </div>
    `;
    
    const performanceDiv = document.createElement("div");
    performanceDiv.className = "stats-section";
    performanceDiv.innerHTML = `
        <h3>Statistik Permainan</h3>
        <div class="stats-grid">
            <div class="stats-game-type">
                <h4>Tebak Kata</h4>
                <p>Total Permainan: ${stats.word.total}</p>
                <p>Kemenangan: ${stats.word.wins} (${stats.word.total > 0 ? Math.round(stats.word.wins / stats.word.total * 100) : 0}%)</p>
                <p>Skor Rata-rata: ${stats.word.avgScore}</p>
            </div>
            <div class="stats-game-type">
                <h4>Tebak Angka</h4>
                <p>Total Permainan: ${stats.number.total}</p>
                <p>Kemenangan: ${stats.number.wins} (${stats.number.total > 0 ? Math.round(stats.number.wins / stats.number.total * 100) : 0}%)</p>
                <p>Skor Rata-rata: ${stats.number.avgScore}</p>
            </div>
        </div>
    `;
    
    statsContent.appendChild(highScoresDiv);
    statsContent.appendChild(performanceDiv);
    
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(title);
    modalContent.appendChild(statsContent);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    window.onclick = function(event) {
        if (event.target == modal) {
            document.body.removeChild(modal);
        }
    };
}

function calculateGameStats() {
    const stats = {
        word: { total: 0, wins: 0, totalScore: 0, avgScore: 0 },
        number: { total: 0, wins: 0, totalScore: 0, avgScore: 0 }
    };
    
    gameData.gameHistory.forEach(entry => {
        const gameType = entry.gameType;
        stats[gameType].total++;
        
        if (entry.result === 'Menang') {
            stats[gameType].wins++;
            stats[gameType].totalScore += entry.score;
        }
    });
    
    if (stats.word.wins > 0) {
        stats.word.avgScore = Math.round(stats.word.totalScore / stats.word.wins);
    }
    
    if (stats.number.wins > 0) {
        stats.number.avgScore = Math.round(stats.number.totalScore / stats.number.wins);
    }
    
    return stats;
}

window.onload = function() {
    initGame();
};