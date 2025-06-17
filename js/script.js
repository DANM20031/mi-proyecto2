const cursos = {
  "HTML": 10,
  "CSS": 15,
  "JavaScript": 20,
  "IA": 30
};

let carrito = [];

// Agrega un curso al carrito
function addToCart(nombre) {
  carrito.push({ nombre, precio: cursos[nombre] });
  actualizarContador();
}

// Elimina un curso del carrito (por nombre, elimina la primera coincidencia)
function eliminarDelCarrito(nombre) {
  const index = carrito.findIndex(item => item.nombre === nombre);
  if (index !== -1) {
    carrito.splice(index, 1); // Elimina un solo elemento
    actualizarContador();
    mostrarCarrito(); // Actualiza el modal después de eliminar
  }
}

// Actualiza el contador del carrito (ícono)
function actualizarContador() {
  document.getElementById('cart-count').textContent = carrito.length;
}

// Muestra el contenido del carrito en el modal
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
    carrito.forEach((item, index) => {
      html += `
        <li>
          ${item.nombre} - $${item.precio} 
          <button onclick="eliminarDelCarrito('${item.nombre}')">❌ Eliminar</button>
        </li>`;
      total += item.precio;
    });
    html += "</ul>";
    itemsContainer.innerHTML = html;
    totalPrecio.textContent = `Total: $${total}`;
  }

  modal.style.display = 'block';
}

// Cierra el modal del carrito
function cerrarCarrito() {
  document.getElementById('cart-modal').style.display = 'none';
}

// Simula la compra y limpia el carrito
function realizarCompra() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }
  alert("Gracias por tu compra. Pronto recibirás confirmación.");
  carrito = [];
  actualizarContador();
  cerrarCarrito();
}

// Abre el chat del asistente virtual
function abrirChat() {
  document.getElementById("chat-box").style.display = "block";
}

// Cierra el chat del asistente virtual
function cerrarChat() {
  document.getElementById("chat-box").style.display = "none";
}
