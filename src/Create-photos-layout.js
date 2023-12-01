const galleryContainer = document.getElementById("galleryContainer");

const images = [
    "/assets/Images/chacana-01.jpg",
    "/assets/Images/chacana-01.jpg",
    "/assets/Images/chacana-01.jpg",
    "/assets/Images/chacana-01.jpg",
    "/assets/Images/chacana-01.jpg",
    "/assets/Images/chacana-01.jpg",
    "/assets/Images/chacana-01.jpg",
    "/assets/Images/chacana-01.jpg",
];

// Crear elementos de imagen en la galería
images.forEach(image => {
    const galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery-item");

    const img = document.createElement("img");
    img.src = image;
    img.alt = "Gallery Image";
    img.addEventListener("click", () => openImage(image));

    galleryItem.appendChild(img);
    galleryContainer.appendChild(galleryItem);
});

// Función para mostrar la imagen a pantalla completa
function openImage(image) {
    const fullscreenContainer = document.createElement("div");
    fullscreenContainer.classList.add("fullscreen-container");

    const fullscreenImg = document.createElement("img");
    fullscreenImg.src = image;
    fullscreenImg.alt = "Fullscreen Image";

    fullscreenContainer.appendChild(fullscreenImg);
    document.body.appendChild(fullscreenContainer);

    fullscreenContainer.addEventListener("click", () => {
        fullscreenContainer.remove();
    });
}
