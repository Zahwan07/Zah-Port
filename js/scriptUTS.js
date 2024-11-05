let score = 0;

// Fungsi untuk memeriksa jawaban dan memberikan skor
function checkAnswers() {
    let correctAnswers = 0;
    document.querySelectorAll('.cell[data-answer]').forEach(cell => {
        const answer = cell.getAttribute('data-answer');
        const userAnswer = cell.querySelector('input').value.toUpperCase();
        
        if (userAnswer === answer) {
            cell.querySelector('input').style.backgroundColor = '#90EE90'; // Hijau untuk jawaban benar
            correctAnswers++;
        } else {
            cell.querySelector('input').style.backgroundColor = '#F08080'; // Merah untuk jawaban salah
        }
    });

    score = correctAnswers;
    document.getElementById('score').textContent = score;
    alert(`Jawaban benar: ${correctAnswers} dari ${document.querySelectorAll('.cell[data-answer]').length}`);
}
