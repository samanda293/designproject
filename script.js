const pizzas = ["p1.png", "p2.png", "p3.png", "p4.png"];
let index = 0;

const pizzaImage = document.getElementById("pizzaImage");
const arc = document.querySelector(".wheel-arc");

// Safety check (important if script loads before DOM)
if (pizzaImage && arc) {

  setInterval(() => {

    // Pause arc rotation
    arc.style.animationPlayState = "paused";

    // Rotate arc slightly (feedback effect)
    arc.style.transform = "rotate(135deg)";

    // Slide out current pizza
    pizzaImage.style.transform = "translateX(-100%) rotate(-20deg)";

    setTimeout(() => {
      // Change pizza image
      index = (index + 1) % pizzas.length;
      pizzaImage.src = pizzas[index];

      // Bring new pizza from right
      pizzaImage.style.transform = "translateX(100%) rotate(20deg)";
    }, 400);

    setTimeout(() => {
      // Reset position
      pizzaImage.style.transform = "translateX(0) rotate(0)";
    }, 500);

    setTimeout(() => {
      // Resume arc rotation
      arc.style.animationPlayState = "running";
      arc.style.transform = ""; // reset transform
    }, 900);

  }, 3000);

}
