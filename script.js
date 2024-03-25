document.addEventListener("DOMContentLoaded", function() {
    var images = ["Assets/img/slideshow1.jpg", "Assets/img/slideshow2.jpg", "Assets/img/slideshow3.jpg"]; // lista de imágenes
    var index = 0; // índice actual

    function changeImage() {
        document.getElementById("slideshow").src = images[index]; // cambiar la imagen
        index = (index + 1) % images.length; // avanzar al siguiente índice circularmente
    }

    // Cambiar la imagen cada 3 segundos (3000 milisegundos)
    setInterval(changeImage, 3000);
});


