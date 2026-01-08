const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

const langBtn = document.getElementById("langBtn");
const langDropdown = document.getElementById("langDropdown");

// Hamburger menu
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Toggle language dropdown
langBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  langDropdown.classList.toggle("show");
});

// Klik di luar → dropdown hilang dengan delay
document.addEventListener("click", () => {
  setTimeout(() => {
    langDropdown.classList.remove("show");
  }, 250);
});

// ============================ Header Srtart =====================================

const slider = document.getElementById("heroSlider");
const slides = document.querySelectorAll(".slide");
const hero = document.querySelector(".hero");

let index = 0;

/* Animasi teks hanya SEKALI saat halaman load */
window.addEventListener("load", () => {
  hero.classList.add("animate");
});

/* Background slide otomatis */
function slideNext() {
  index++;
  if (index >= slides.length) {
    index = 0;
  }

  slider.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(slideNext, 4000);

// =====================================  Header end  =====================================
