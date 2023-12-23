const aside_mobile = document.querySelector(".background-menu-mobile")
const aside_mobile_second = document.querySelector(".mobile-menu")
const icon_menu = document.querySelector(".icon-menu-d")
const icon_menu_aside = document.querySelector(".icon-menu-mobile")
const background_mobile_gray = document.querySelector(".background-menu-mobile-Father")
const contacts__Mobile = document.querySelector(".contacts-mobile-click ")
const arrow_down = document.querySelector(".icon-menu-contacts")
const mediaqueryList = window.matchMedia("(min-width: 1267px)");
const seccionesOcultas = document.querySelectorAll(".hidden")

icon_menu.addEventListener("click",ShowAside)
icon_menu_aside.addEventListener("click",toggleAside)
arrow_down.addEventListener("click",ShowContacts)
// background_mobile_gray.addEventListener("click",toggleAside)
function ShowAside(){
  aside_mobile.classList.toggle("inactive")
  aside_mobile_second.classList.toggle("inactive")
  background_mobile_gray.classList.toggle("inactive")
}

function toggleAside(){
  AsideClosedContainer = aside_mobile.classList.contains("inactive") 
  AsideClosedSon= aside_mobile_second.classList.contains("inactive")

  if(!AsideClosedContainer && !AsideClosedSon){
    aside_mobile.classList.add("inactive") 
    aside_mobile_second.classList.add("inactive")
    background_mobile_gray.classList.add("inactive")
  }
}

function ShowContacts(){
  contacts__Mobile.classList.toggle("inactive")
}


document.querySelectorAll('.image-container .image img').forEach(image => {
  image.addEventListener('click', () => {
      document.querySelector(".popup-image").style.display = 'block';
      document.querySelector(".popup-image img").src = image.getAttribute("src");
  });
});

document.querySelector('.popup-image span').addEventListener('click', () => {
  document.querySelector('.popup-image').style.display = 'none';
});




document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('keydown', test);
  const imageContainer = document.querySelector('.image-container');
  const popupImage = document.querySelector('.popup-image');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  const closeButton = document.querySelector('.popup-image span');
  const popupImageElement = document.querySelector('.popup-image img');

  let currentIndex = 0;
  let images = Array.from(document.querySelectorAll('.image-container .image img'));

  function test(event){
    if(event.keyCode == '37' && currentIndex > 0){ // Tecla con la flecha hacia la izquierda y no estás en la primera imagen
      navigateLeft();
      updateArrowsVisibility();
  }
  if(event.keyCode == '39' && currentIndex < images.length - 1){ // Tecla con la flecha hacia la derecha y no estás en la última imagen
      navigateRight();
      updateArrowsVisibility();
  }
  if(event.keyCode == '27'){
    document.querySelector('.popup-image').style.display = 'none';
  }

   }
  // Event listener para cada imagen
  images.forEach((image, index) => {
      image.addEventListener('click', () => {
          currentIndex = index;
          updatePopupImage();
          showPopup();
          updateArrowsVisibility();
      });
  });

  // Event listener para el botón de cerrar
  closeButton.addEventListener('click', hidePopup);

  // Event listener para la flecha izquierda
  leftArrow.addEventListener('click', () => {
      navigateLeft();
      updateArrowsVisibility();
  });

  // Event listener para la flecha derecha
  rightArrow.addEventListener('click', () => {
      navigateRight();
      updateArrowsVisibility();
  });

  function showPopup() {
      popupImage.style.display = 'block';
  }

  function hidePopup() {
      popupImage.style.display = 'none';
  }

  function navigateLeft() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updatePopupImage();
  }

  function navigateRight() {
      currentIndex = (currentIndex + 1) % images.length;
      updatePopupImage();
  }

  function updatePopupImage() {
      popupImageElement.src = images[currentIndex].src;
  }

  function updateArrowsVisibility() {
      leftArrow.style.display = currentIndex === 0 ? 'none' : 'block';
      rightArrow.style.display = currentIndex === images.length - 1 ? 'none' : 'block';
  }
});

// Función para abrir y cerrar la sección de la galería
// Función para abrir y cerrar la sección de la galería
// function toggleSections() {
//   const galleryLink = document.getElementById("galleryLink");
//   const HomeLink = document.getElementById("HomeLink")
//   const NoticesLink = document.getElementById("noticeLink")
//   const body = document.body;

//   // Agregar o quitar la clase 'gallery-open' al enlace y al cuerpo del documento
//   galleryLink.classList.toggle("gallery-open");
//   body.classList.toggle("gallery-open");
//   HomeLink.classList.toggle("home-open");
//   body.classList.toggle("home-open");
//   NoticesLink.classList.toggle("noticesLink");
//   body.classList.toggle("noticesLink");
// }

const sections = document.querySelectorAll('.sections');

const cargarSecciones = (entradas, observador) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visible');
        } else {
            // entrada.target.classList.remove('visible'); // Puedes descomentar esta línea si deseas que las secciones desaparezcan al salir del viewport
        }
    });
};

const observadorSecciones = new IntersectionObserver(cargarSecciones, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Puedes ajustar el valor según tus preferencias
});

sections.forEach((section) => {
    observadorSecciones.observe(section);
});