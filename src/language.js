const arrow_down = document.querySelector(".icon-arrow");
const languages = document.querySelector(".other-languages");

arrow_down.addEventListener("click", addMenuLanguage);
// Assuming you want to close the menu when any language tab is clicked
languages.addEventListener("click", addMenuLanguage);

function addMenuLanguage() {
    languages.classList.toggle("inactive");
    languages.classList.toggle("active");
    frames()
}
function changeLanguage(clickedElement, language) {
    const container = document.querySelector('.container-language');
    const officialLanguages = container.querySelector('.official-language');
    const otherLanguages = container.querySelector('.other-languages');

    // Clona el elemento clickeado
    const clickedClone = clickedElement.cloneNode(true);

    // Elimina el elemento clickeado del idioma oficial
    clickedElement.remove();

    // Añade el clon al inicio de la lista de idiomas oficiales
    officialLanguages.insertBefore(clickedClone, officialLanguages.firstChild);

    // Muestra el contenedor de idiomas inactivos
    otherLanguages.classList.remove('inactive');
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

