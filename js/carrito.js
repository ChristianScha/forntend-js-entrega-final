import { eliminarProducto, vaciarCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

const renderizarCarrito = () => {
  const carrito = obtenerCarrito();
  actualizarContador(carrito);

  const contenedor = document.getElementById("contenedor-carrito");
  const accionesCarrito = document.getElementById("acciones-carrito");

  contenedor.innerHTML = "";
  accionesCarrito.innerHTML = "";

  if (!carrito.length) {
    const mensaje = document.createElement("p");
    mensaje.classList.add("mensaje-carrito-vacio");
    mensaje.textContent = "Carrito vacío!!!!";

    contenedor.appendChild(mensaje);
    return;
  }

  carrito.forEach((producto, indice) => {
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("tarjeta-prod");

    const img = document.createElement("img");
    img.alt = producto.nombre;
    img.src = `../${producto.img}`;

    const titulo = document.createElement("h3");
    titulo.textContent = producto.nombre;

    const precio = document.createElement("p");
    precio.textContent = `$${producto.precio}`;

    const botonEliminar = document.createElement("button");
    botonEliminar.classList.add("btn");
    botonEliminar.classList.add("btn-eliminar-carrito");
    botonEliminar.textContent = "Eliminar Producto";

    botonEliminar.addEventListener("click", () => {
      eliminarProducto(indice);
      renderizarCarrito();
    });
    tarjeta.appendChild(img);
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(precio);
    tarjeta.appendChild(botonEliminar);

    contenedor.appendChild(tarjeta);
  });

  const botonVaciar = document.createElement("button");
  botonVaciar.classList.add("btn");
  botonVaciar.classList.add("btn-vaciar-carrito");
  botonVaciar.textContent = "Vaciar Carrito";

  botonVaciar.addEventListener("click", () => {
    vaciarCarrito();
    renderizarCarrito();
  });

  accionesCarrito.appendChild(botonVaciar);
};

document.addEventListener("DOMContentLoaded", () => {
  renderizarCarrito();
});
