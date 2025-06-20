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

function eliminarDelCarrito(nombre) {
  const index = carrito.findIndex(item => item.nombre === nombre);
  if (index !== -1) {
    carrito.splice(index, 1);
    actualizarContador();
    mostrarCarrito();
  }
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
      html += `<li>${item.nombre} - $${item.precio} <button class="btn-eliminar" onclick="eliminarDelCarrito('${item.nombre}')">Eliminar</button></li>`;
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

function mostrarOpcionesPago() {
  const metodo = document.getElementById('seleccion-pago').value;
  const contenedor = document.getElementById('opciones-pago');
  let contenido = "";

  switch (metodo) {
    case "tarjeta":
      contenido = "Introduce los datos de tu tarjeta en la pasarela segura.";
      break;
    case "efectivo":
      contenido = "Puedes pagar en puntos autorizados como Baloto o Efecty.";
      break;
    case "transferencia":
      contenido = "Haz tu pago a la cuenta bancaria 123456789 del banco ABC.";
      break;
    case "paypal":
      contenido = "Serás redirigido a PayPal para finalizar tu pago.";
      break;
    default:
      contenido = "Selecciona una opción para ver detalles.";
  }

  contenedor.innerHTML = `<p>${contenido}</p>`;
  contenedor.style.display = 'block';
}

function abrirChat() {
  document.getElementById("chat-box").style.display = "block";
}

function cerrarChat() {
  document.getElementById("chat-box").style.display = "none";
}
