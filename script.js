const pizzas = ["p1.png", "p2.png", "p3.png", "p4.png"];
let index = 0;
const pizzaImage = document.getElementById("pizzaImage");

setInterval(() => {
  // slide out
  pizzaImage.style.transform = "translateX(-100%)";

  setTimeout(() => {
    index = (index + 1) % pizzas.length;
    pizzaImage.src = pizzas[index];

    // move image to right before sliding in
    pizzaImage.style.transform = "translateX(100%)";

    setTimeout(() => {
      pizzaImage.style.transform = "translateX(0)";
    }, 50);

  }, 700);

}, 3000);
