// script.js
const planes = {
  "Cabo de la Vela": 120,
  "Palomino": 90,
  "Punta Gallinas": 150,
  "Alta Guajira": 180
};

let carrito = [];

function addToCart(nombre) {
  carrito.push({ nombre, precio: planes[nombre] });
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
  alert("Gracias por reservar con K_Ory. Pronto recibirás confirmación.");
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
      contenido = "Introduce los datos de tu tarjeta en nuestra pasarela segura.";
      break;
    case "efectivo":
      contenido = "Puedes pagar en puntos autorizados como Efecty o Baloto.";
      break;
    case "transferencia":
      contenido = "Haz tu pago a la cuenta bancaria 123456789 del banco ABC.";
      break;
    case "paypal":
      contenido = "Serás redirigido a PayPal para completar tu pago.";
      break;
    default:
      contenido = "Selecciona una opción para ver los detalles.";
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

// 🗺 Mapa interactivo de destinos turísticos
function cargarMapa() {
  const mapa = document.getElementById("mapa");
  if (mapa) {
    mapa.innerHTML = `
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1_L1xvXnUtBhHR7zvLZcF3r7lHh4Ktyo&hl=es"
        width="100%"
        height="480"
        style="border:0; border-radius: 8px;"
        allowfullscreen=""
        loading="lazy">
      </iframe>`;
  }
}

document.addEventListener("DOMContentLoaded", cargarMapa);

const imagenesPorDestino = {
  "cabo": [
    "images/cabo1.jpg",
    "images/cabo2.jpg",
    "images/cabo3.jpg",
    "images/cabo4.jpg"
  ],
  "palomino": [
    "images/palomino1.jpg",
    "images/palomino2.jpg",
    "images/palomino3.jpg",
    "images/palomino4.jpg"
  ],
  "punta": [
    "images/punta1.jpg",
    "images/punta2.jpg",
    "images/punta3.jpg",
    "images/punta4.jpg"
  ],
  "alta": [
    "images/alta1.jpg",
    "images/alta2.jpg",
    "images/alta3.jpg",
    "images/alta4.jpg"
  ]
};

function mostrarGaleria(destino) {
  const galeria = document.getElementById("galeria-imagenes");
  const titulo = document.getElementById("titulo-galeria");
  galeria.innerHTML = "";
  titulo.textContent = `Galería de ${destino.charAt(0).toUpperCase() + destino.slice(1)}`;

  imagenesPorDestino[destino].forEach(ruta => {
    const img = document.createElement("img");
    img.src = ruta;
    galeria.appendChild(img);
  });

  document.getElementById("galeria-modal").style.display = "flex";
}

function cerrarGaleria() {
  document.getElementById("galeria-modal").style.display = "none";
}
