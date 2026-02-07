const pizzas = [
  "p1.png",
  "p2.png",
  "p3.png",
  "p4.png"
];

let index = 0;
const pizzaImage = document.getElementById("pizzaImage");

setInterval(() => {
  pizzaImage.style.opacity = 0;

  setTimeout(() => {
    index = (index + 1) % pizzas.length;
    pizzaImage.src = pizzas[index];
    pizzaImage.style.opacity = 1;
  }, 500);

}, 3000);
