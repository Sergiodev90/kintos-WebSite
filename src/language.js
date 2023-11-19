const arrow_down = document.querySelector(".icon-arrow");
const language_image = document.querySelector(".language-tab")
const languages = document.querySelector(".other-languages");
arrow_down.addEventListener("click",addMenuLanguage);
language_image.addEventListener("click",addMenuLanguage)

function addMenuLanguage(){
    languages.classList.toggle("inactive")
    frames()
}


function frames(){
    const animationClosed = languages.animate([
        //keyframes
        // {transform: "TranslateY(-50px)"},
        // {transform: "TranslateY(0px)"},
        {transform:"TranslateY(-50px)"},
        {transform: "TranslateY(0)"}
    ],{
        //options
        easing:"linear",
        iterations:1,
        duration:200 //milisegundos
    })
    return animationClosed.finished;
}

