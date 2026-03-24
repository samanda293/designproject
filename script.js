// Pizza images
const pizzas = ["p1.png", "p2.png", "p3.png", "p4.png"];
let index = 0;

// Get elements
const pizzaImage = document.getElementById("pizzaImage");
const arc = document.querySelector(".wheel-arc");

// Run only if elements exist
if (pizzaImage && arc) {

  function changePizza() {

    // Pause arc animation
    arc.style.animationPlayState = "paused";

    // Small rotation effect
    arc.style.transform = "rotate(135deg)";

    // Slide current pizza out
    pizzaImage.style.transform = "translateX(-100%) rotate(-20deg)";

    setTimeout(() => {
      // Change image
      index = (index + 1) % pizzas.length;
      pizzaImage.src = pizzas[index];

      // Bring new pizza in
      pizzaImage.style.transform = "translateX(100%) rotate(20deg)";
    }, 400);

    setTimeout(() => {
      // Reset position smoothly
      pizzaImage.style.transform = "translateX(0) rotate(0)";
    }, 550);

    setTimeout(() => {
      // Resume arc animation
      arc.style.animationPlayState = "running";
      arc.style.transform = "";
    }, 900);
  }

  // Run every 3 seconds
  setInterval(changePizza, 3000);
}
