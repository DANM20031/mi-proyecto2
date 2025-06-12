const cursos = {
  "HTML": 10,
  "CSS": 15,
  "JavaScript": 20,
  "IA": 30
};

let carrito = [];

function addToCart(nombre) {
  carrito.push({ nombre, precio: cursos[nombre] });
  actualizarContador();
}

function actualizarContador() {
  document.getElementById('cart-count').textContent = carrito.length;
}

function mostrarCarrito() {
  const modal = document.getElementById('cart-modal');
  const itemsContainer = document.getElementById('cart-items');
  const totalPrecio = document.getElementById('total-price');

  if (carrito.length === 0) {
    itemsContainer.innerHTML = "<p>Tu carrito está vacío.</p>";
    totalPrecio.textContent = "Total: $0";
  } else {
    let total = 0;
    let html = "<ul>";
    carrito.forEach(item => {
      html += `<li>${item.nombre} - $${item.precio}</li>`;
      total += item.precio;
    });
    html += "</ul>";
    itemsContainer.innerHTML = html;
    totalPrecio.textContent = `Total: $${total}`;
  }

  modal.style.display = 'block';
}

function cerrarCarrito() {
  document.getElementById('cart-modal').style.display = 'none';
}
