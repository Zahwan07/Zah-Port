function checkAnswers() {
    const cells = document.querySelectorAll('.cell input'); // Mengambil semua input dalam grid
    let score = 0; // Inisialisasi skor

    // Loop melalui setiap sel input
    cells.forEach(cell => {
        const answer = cell.dataset.answer; // Ambil jawaban yang benar dari data-attribute
        const userAnswer = cell.value.toUpperCase(); // Ambil jawaban pengguna dan ubah ke huruf besar
        
        if (userAnswer === answer) {
            cell.classList.add('correct');
            cell.classList.remove('incorrect');
            score++; // Tambah skor jika benar
        } else {
            cell.classList.add('incorrect');
            cell.classList.remove('correct');
        }
    });

    // Update skor di elemen #score
    document.getElementById('score').textContent = score;

    // Update warna pada pertanyaan berdasarkan jawaban pengguna
    updateQuestionsColor();
}

function updateQuestionsColor() {
    const horizontalAnswers = {
        1: "AGUSTUS",
        2: "DUBLIN",
        3: "PLASMA",
        4: "CREEPER",
        5: "SWIFT"
    };

    const verticalAnswers = {
        1: "ITALI",
        2: "ARGENTINA",
        3: "SATURNUS",
        4: "TIRAMISU",
        5: "PETABYTE"
    };

    // Periksa jawaban mendatar
    for (const [num, answer] of Object.entries(horizontalAnswers)) {
        const questionEl = document.getElementById(`q-horizontal-${num}`);
        const userAnswer = getAnswerFromGrid('horizontal', num);
        
        if (userAnswer === answer) {
            questionEl.classList.add('correct');
            questionEl.classList.remove('incorrect');
        } else {
            questionEl.classList.add('incorrect');
            questionEl.classList.remove('correct');
        }
    }

    // Periksa jawaban menurun
    for (const [num, answer] of Object.entries(verticalAnswers)) {
        const questionEl = document.getElementById(`q-vertical-${num}`);
        const userAnswer = getAnswerFromGrid('vertical', num);
        
        if (userAnswer === answer) {
            questionEl.classList.add('correct');
            questionEl.classList.remove('incorrect');
        } else {
            questionEl.classList.add('incorrect');
            questionEl.classList.remove('correct');
        }
    }
}

// Fungsi untuk mengambil jawaban pengguna dari grid berdasarkan arah dan nomor pertanyaan
function getAnswerFromGrid(direction, number) {
    const answerCells = [];
    // Pilih sel-sel yang sesuai dengan arah dan nomor pertanyaan
    switch (direction) {
        case 'horizontal':
            // Tambahkan logika sesuai posisi mendatar
            // Contoh: jika nomor 1 mendatar dimulai dari sel pertama pada baris pertama
            // PENTING: Sesuaikan dengan struktur grid
            if (number === 1) answerCells.push(...document.querySelectorAll('.grid .cell:nth-child(n+1):nth-child(-n+7) input'));
            break;
        case 'vertical':
            // Tambahkan logika sesuai posisi menurun
            // Contoh: jika nomor 1 menurun dimulai dari sel pertama pada kolom pertama
            // PENTING: Sesuaikan dengan struktur grid
            if (number === 1) answerCells.push(...document.querySelectorAll('.grid .cell:nth-child(1n+0):nth-child(-n+5) input'));
            break;
    }
    return answerCells.map(cell => cell.value.toUpperCase()).join('');
}
