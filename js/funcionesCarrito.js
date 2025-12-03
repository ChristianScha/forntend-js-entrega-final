import { guardarCarrito, obtenerCarrito, vaciarCarrito } from "./storage.js";
import { actualizarContador, mostrarMensaje } from "./ui.js";

export const agregarAlCarrito = (producto) => {
  const carrito = obtenerCarrito();
  carrito.push(producto);

  guardarCarrito(carrito);

  actualizarContador(carrito);
  mostrarMensaje("Producto Añadido");
};

export const eliminarProducto = (id) => {
  const carrito = obtenerCarrito();
  carrito.splice(id, 1);

  guardarCarrito(carrito);

  actualizarContador(carrito);
  mostrarMensaje("Producto Eliminado");
};

export const vaciarCarrito = () => {
  vaciarCarrito();
  actualizarContador([]);
  mostrarMensaje("Carrito Vacio");
};
