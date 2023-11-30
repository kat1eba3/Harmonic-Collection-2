const images = ["billboard1.jpg", "billboard2.jpg", "billboard3.jpg", "billboard4.jpg.webp"];
const mainImage = document.getElementById("main-image");
const hiddenImages = document.querySelectorAll(".hidden-image");

function shuffleImage() {
    // Get a random index for the images array
    const randomIndex = Math.floor(Math.random() * images.length);

    // Ensure the next image is different from the current one
    let newImageSrc = mainImage.src;
    while (newImageSrc === mainImage.src) {
        newImageSrc = images[randomIndex];
    }
    // Change the main image source
    mainImage.src = newImageSrc;

    // Toggle the visibility of hidden images
    hiddenImages.forEach((img, index) => {
        img.style.display = index === randomIndex ? "block" : "none";
    });
}
