let total = 0;

function addToCart(name, price) {
  const cart = document.getElementById("cartItems");
  const item = document.createElement("li");
  item.textContent = name + " - ₹" + price;
  cart.appendChild(item);

  total += price;
  document.getElementById("total").textContent = total;
}

function placeOrder() {
  if (total === 0) {
    alert("Cart is empty!");
  } else {
    alert("Order placed successfully 🍕");
    location.reload();
  }
}

function scrollToMenu() {
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
}
