const promoZapatos = document.getElementById("promoZapatos");
const cuadro1 = document.querySelector(".cuadro1");
const cuadro2 = document.querySelector(".cuadro2");
let isSeparated = false;

promoZapatos.addEventListener("mousemove", function (event) {
  const promoZapatosRect = promoZapatos.getBoundingClientRect();
  const promoZapatosCenter = promoZapatosRect.left + promoZapatosRect.width / 2;
  const cursorPosition = event.clientX;

  if (Math.abs(cursorPosition - promoZapatosCenter) < 100) {
    if (!isSeparated) {
      cuadro1.style.transform = "translateX(-80%)";
      cuadro2.style.transform = "translateX(80%)";
      isSeparated = true;
    }
  } else {
    if (isSeparated) {
      cuadro1.style.transform = "none";
      cuadro2.style.transform = "none";
      isSeparated = false;
    }
  }
});

// SLIDER PRODUCTOS
const slider = document.querySelector('.slider');
const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;
const slideInterval = 5000; 


function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
}


function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
}

function updateSlider() {
  const slideWidth = slides[currentIndex].offsetWidth;
  const containerWidth = slider.offsetWidth;
  const position = (containerWidth / 2) - (slideWidth / 2) - (currentIndex * (slideWidth + 20));
  sliderContainer.style.transform = `translateX(${position}px)`;
}

nextButton.addEventListener('click', () => {
  nextSlide();
});

prevButton.addEventListener('click', () => {
  prevSlide();
});

setInterval(() => {
  nextSlide();
}, slideInterval);

window.addEventListener('load', () => {
  updateSlider();
});
