const pizzas = ["p1.png", "p2.png", "p3.png", "p4.png"];
let index = 0;

const pizzaImage = document.getElementById("pizzaImage");
const arc = document.querySelector(".wheel-arc");

setInterval(() => {

  // pause idle rotation
  arc.style.animationPlayState = "paused";

  // wheel spin feedback
  arc.style.transform = "rotate(135deg)";
  pizzaImage.style.transform = "translateX(-100%) rotate(-20deg)";

  setTimeout(() => {
    index = (index + 1) % pizzas.length;
    pizzaImage.src = pizzas[index];
    pizzaImage.style.transform = "translateX(100%) rotate(20deg)";
  }, 400);

  setTimeout(() => {
    pizzaImage.style.transform = "translateX(0) rotate(0)";
  }, 450);

  setTimeout(() => {
    // resume idle spin
    arc.style.animationPlayState = "running";
  }, 900);

}, 3000);
