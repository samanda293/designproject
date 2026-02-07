const images = ["p1.jpg", "p2.jpg", "p3.jpg", "p4.jpg"];
let index = 0;

const pizzaImage = document.getElementById("pizzaImage");

setInterval(() => {
    pizzaImage.style.opacity = 0;

    setTimeout(() => {
        index = (index + 1) % images.length;
        pizzaImage.src = images[index];
        pizzaImage.style.opacity = 1;
    }, 500);

}, 3000);
