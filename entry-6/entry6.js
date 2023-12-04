// entry6.js

document.addEventListener("DOMContentLoaded", function () {
    // Increase screen size
    document.body.style.width = "2000px";
    document.body.style.height = "2000px";

    scatterImages();
});

function scatterImages() {
    const images = document.querySelectorAll("section img");

    images.forEach(function (image) {
        setRandomHorizontalPosition(image);
    });
}

function setRandomHorizontalPosition(element) {
    const maxX = document.body.clientWidth - element.clientWidth;

    // Divide the screen into non-overlapping sections
    const sectionWidth = maxX / 8; // You can adjust the number of sections as needed

    // Set random positions within each section
    const randomSection = Math.floor(Math.random() * 4); // Number of sections
    const randomX = Math.min(sectionWidth * randomSection + Math.random() * sectionWidth, maxX);

    const randomY = Math.floor(Math.random() * (document.body.clientHeight - element.clientHeight));

    element.style.left = `${randomX}px`;
    element.style.top = `${randomY}px`;
}
