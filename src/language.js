const arrow_down = document.querySelector(".icon-arrow");
const languages = document.querySelector(".other-languages");

arrow_down.addEventListener("click", addMenuLanguage);
// Assuming you want to close the menu when any language tab is clicked
languages.addEventListener("click", addMenuLanguage);

function addMenuLanguage() {
    languages.classList.toggle("inactive");
}

// function frames(){
//     const animationClosed = languages.animate([
//         //keyframes
//         // {transform: "TranslateY(-50px)"},
//         // {transform: "TranslateY(0px)"},
//         {transform:"TranslateY(-50px)"},
//         {transform: "TranslateY(0)"}
//     ],{
//         //options
//         easing:"linear",
//         iterations:1,
//         duration:200 //milisegundos
//     })
//     return animationClosed.finished;
// }

