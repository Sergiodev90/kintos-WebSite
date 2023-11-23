const aside_mobile = document.querySelector(".background-menu-mobile")
const aside_mobile_second = document.querySelector(".mobile-menu")
const icon_menu = document.querySelector(".icon-menu")
const icon_menu_aside = document.querySelector(".icon-menu-mobile")
const background_mobile_gray = document.querySelector(".background-menu-mobile-Father")


icon_menu.addEventListener("click",ShowAside)
icon_menu_aside.addEventListener("click",toggleAside)
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

