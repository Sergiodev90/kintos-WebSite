(()=>{var e=document.querySelector(".background-menu-mobile"),c=document.querySelector(".mobile-menu"),t=document.querySelector(".icon-menu-d"),i=document.querySelector(".icon-menu-mobile"),n=document.querySelector(".background-menu-mobile-Father"),o=document.querySelector(".contacts-mobile-click "),s=document.querySelector(".icon-menu-contacts");t.addEventListener("click",(function(){e.classList.toggle("inactive"),c.classList.toggle("inactive"),n.classList.toggle("inactive")})),i.addEventListener("click",(function(){AsideClosedContainer=e.classList.contains("inactive"),AsideClosedSon=c.classList.contains("inactive"),AsideClosedContainer||AsideClosedSon||(e.classList.add("inactive"),c.classList.add("inactive"),n.classList.add("inactive"))})),s.addEventListener("click",(function(){o.classList.toggle("inactive")}))})();