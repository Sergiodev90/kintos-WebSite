const aside_mobile = document.querySelector(".background-menu-mobile")
const aside_mobile_second = document.querySelector(".mobile-menu")
const icon_menu = document.querySelector(".icon-menu-d")
const icon_menu_aside = document.querySelector(".icon-menu-mobile")
const background_mobile_gray = document.querySelector(".background-menu-mobile-Father")
const contacts__Mobile = document.querySelector(".contacts-mobile-click ")
const arrow_down = document.querySelector(".icon-menu-contacts")

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
