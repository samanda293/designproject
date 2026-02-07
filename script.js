const images = [
  "images/pizza1.jpg",
  "images/pizza2.jpg",
  "images/pizza3.jpg"
];

let index = 0;
const pizzaImage = document.getElementById("pizzaImage");

setInterval(() => {
  pizzaImage.style.opacity = 0;

  setTimeout(() => {
    index = (index + 1) % images.length;
    pizzaImage.src = images[index];
    pizzaImage.style.opacity = 1;
  }, 400);

}, 3000);
