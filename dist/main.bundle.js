(()=>{var e=document.querySelector(".background-menu-mobile"),n=document.querySelector(".mobile-menu"),t=document.querySelector(".icon-menu-d"),c=document.querySelector(".icon-menu-mobile"),o=document.querySelector(".background-menu-mobile-Father"),i=document.querySelector(".contacts-mobile-click "),l=document.querySelector(".icon-menu-contacts");window.matchMedia("(min-width: 1267px)"),t.addEventListener("click",(function(){e.classList.toggle("inactive"),n.classList.toggle("inactive"),o.classList.toggle("inactive")})),c.addEventListener("click",(function(){AsideClosedContainer=e.classList.contains("inactive"),AsideClosedSon=n.classList.contains("inactive"),AsideClosedContainer||AsideClosedSon||(e.classList.add("inactive"),n.classList.add("inactive"),o.classList.add("inactive"))})),l.addEventListener("click",(function(){i.classList.toggle("inactive")})),document.querySelectorAll(".image-container .image img").forEach((function(e){e.addEventListener("click",(function(){document.querySelector(".popup-image").style.display="block",document.querySelector(".popup-image img").src=e.getAttribute("src")}))})),document.querySelector(".popup-image span").addEventListener("click",(function(){document.querySelector(".popup-image").style.display="none"})),document.addEventListener("DOMContentLoaded",(function(){window.addEventListener("keydown",(function(e){"37"==e.keyCode&&i>0&&(d(),u()),"39"==e.keyCode&&i<l.length-1&&(a(),u()),"27"==e.keyCode&&(document.querySelector(".popup-image").style.display="none")})),document.querySelector(".image-container");var e=document.querySelector(".popup-image"),n=document.querySelector(".left-arrow"),t=document.querySelector(".right-arrow"),c=document.querySelector(".popup-image span"),o=document.querySelector(".popup-image img"),i=0,l=Array.from(document.querySelectorAll(".image-container .image img"));function d(){i=(i-1+l.length)%l.length,r()}function a(){i=(i+1)%l.length,r()}function r(){o.src=l[i].src}function u(){n.style.display=0===i?"none":"block",t.style.display=i===l.length-1?"none":"block"}l.forEach((function(n,t){n.addEventListener("click",(function(){i=t,r(),e.style.display="block",u()}))})),c.addEventListener("click",(function(){e.style.display="none"})),n.addEventListener("click",(function(){d(),u()})),t.addEventListener("click",(function(){a(),u()}))}))})();