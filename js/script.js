let cartCount = 0;

function addToCart(courseName) {
  cartCount++;
  document.getElementById("cart-count").textContent = cartCount;
  alert(`Has agregado el curso de ${courseName} al carrito.`);
}
