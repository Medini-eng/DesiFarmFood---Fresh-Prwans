// JavaScript can be used to create smooth animations for floating images
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.floating-image');

    images.forEach(image => {
        const speed = Math.random() * 2 + 1; // Set random speed for each image
        let direction = 1;

        function floatImage() {
            const position = parseFloat(getComputedStyle(image).top);
            if (position > 100 || position < 20) {
                direction *= -1; // Reverse direction if it reaches a limit
            }
            image.style.top = position + direction * speed + 'px';
            requestAnimationFrame(floatImage);
        }

        floatImage();
    });
});
