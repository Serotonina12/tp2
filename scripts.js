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
const slider = document.querySelector('.slider-container');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slideWidth = document.querySelector('.slide').offsetWidth;
let position = 0;
let intervalId = null;

// Función para cambiar la imagen automáticamente cada 10 segundos
function startAutoSlide() {
  intervalId = setInterval(() => {
    if (position > -(slider.offsetWidth - slideWidth)) {
      position -= slideWidth;
      slider.style.transform = `translateX(${position}px)`;
    } else {
      position = 0;
      slider.style.transform = 'translateX(0)';
    }
  }, 10000);
}

// Función para detener el cambio automático de imágenes
function stopAutoSlide() {
  clearInterval(intervalId);
}

nextBtn.addEventListener('click', () => {
  if (position > -(slider.offsetWidth - slideWidth)) {
    position -= slideWidth;
    slider.style.transform = `translateX(${position}px)`;
  }
});

prevBtn.addEventListener('click', () => {
  if (position < 0) {
    position += slideWidth;
    slider.style.transform = `translateX(${position}px)`;
  }
});

// Iniciar el cambio automático de imágenes al cargar la página
startAutoSlide();

// Detener el cambio automático de imágenes al pasar el mouse sobre el carrusel
slider.addEventListener('mouseenter', stopAutoSlide);

// Reanudar el cambio automático de imágenes al quitar el mouse del carrusel
slider.addEventListener('mouseleave', startAutoSlide);

window.addEventListener('resize', () => {
  position = 0;
  slider.style.transform = 'translateX(0)';
});
