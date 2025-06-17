const slides = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function updateSlide() {
  slides.style.transform = `translateX(-${currentIndex * 800}px)`;
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % 3;
  updateSlide();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + 3) % 3;
  updateSlide();
});

// Optionnel : Auto-slide
setInterval(() => {
  currentIndex = (currentIndex + 1) % 3;
  updateSlide();
}, 5000);
