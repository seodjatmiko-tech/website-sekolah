const body = document.body;
const btn = document.getElementById('theme-toggle');

// cek preferensi tersimpan
if (localStorage.theme === 'dark') {
    body.classList.add('dark');
    btn.textContent = '🌞';
}

// saat tombol diklik
btn.onclick = () => {
    body.classList.toggle('dark');
    const darkMode = body.classList.contains('dark');
    localStorage.theme = darkMode ? 'dark' : 'light';
    btn.textContent = darkMode ? '🌞' : '🌙';
};
// Ambil tombol
const backToTopBtn = document.getElementById("backToTop");

// Saat user scroll 100px kebawah, tampilkan tombol
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

// Saat tombol diklik, kembali ke atas
backToTopBtn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
// script.js
// Tampilkan tombol saat scroll ke bawah 100px
window.onscroll = function() {
    const topBtn = document.getElementById("topBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

// Fungsi saat tombol diklik: scroll ke atas
document.getElementById("topBtn").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
