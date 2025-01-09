  var answers = {
    "AGUSTUS": [11, 12, 13, 14, 15, 16, 17],
    "ARGENTINA": [18, 19, 20, 21, 22, 23, 24, 25],
    "TIRAMISU": [27, 28, 29, 30, 31, 32, 33],
    "SATURNUS": [34, 35, 36, 37, 38, 39, 40],
    "DUBLIN": [41, 42, 43, 44, 45],
    "CHINA": [46, 47, 48, 49],
    "SWIFT": [50, 51, 52, 53],
    "PLASMA": [54, 55, 56, 57, 58, 59],
    "PETABYTE": [61, 62, 63, 64, 65, 66, 67]
  };
  
  var inputs = document.querySelectorAll("input.inpt");
  
  // Fungsi untuk mengecek setiap jawaban
  function checkEachAnswer() {
    var allCorrect = true;
  
    for (var key in answers) {
      let ids = answers[key];
      var currentValues = ids
        .map((id) => document.getElementById(id).value.toUpperCase())
        .join("");
  
      if (currentValues === key) {
        ids.forEach((id) => {
          document.getElementById(id).style.color = "green";
        });
      } else {
        allCorrect = false;
        ids.forEach((id) => {
          document.getElementById(id).style.color = "red";
        });
      }
    }
  
    return allCorrect;
  }

  
  console.log("Tombol Cek Jawaban Ditekan"); // Debug
var allCorrect = checkEachAnswer();
console.log("Status Semua Benar:", allCorrect); // Debug
if (allCorrect) {
  alert("Selamat! Semua jawaban Anda benar!");
} else {
  alert("Masih ada jawaban yang salah. Silakan periksa kembali.");
}

  // Event listener untuk tombol cek jawaban
  document.getElementById("checkAnswers").addEventListener("click", function () {
    var allCorrect = checkEachAnswer();
    if (allCorrect) {
      alert("Selamat! Semua jawaban Anda benar!");
    } else {
      alert("Masih ada jawaban yang salah. Silakan periksa kembali.");
    }
  });
