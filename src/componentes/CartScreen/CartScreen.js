import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export const CartScreen = () => {
  const { carrito, vaciarCarrito, removerItem, calcularTotal } =
    useContext(CartContext);

  return (
    <div className="conteiner my-5">
      {carrito.length === 0 ? (
        <>
          <h1>SU CARRITO ESTA VACIO - SIN FIREBASE</h1>
          <Link to="/">Ir al Inicio</Link>
        </>
      ) : (
        <>
          <h1>Resumen de Compra</h1>
          <hr></hr>
          {carrito.map((prod) => (
            <div key={prod.name}>
              <h3>Nombre: {prod.name}</h3>
              <h3>${prod.price}</h3>
              <h3>Cantidad: {prod.cantidad}</h3>
              <h3>Sub-Total: ${prod.cantidad * prod.price}</h3>
              {/* SE hace asi porque lo hago con una funcion anonima */}
              <button onClick={() => removerItem(prod.id)}>Borrar Item</button>
              <hr></hr>
            </div>
          ))}
          <hr></hr>
          <h3>TOTAL: ${calcularTotal()}</h3>
          <button onClick={vaciarCarrito}>VACIAR TODO EL CARRITO</button>
          <Link to={'/formulario'}>
            <button>Comprar</button>
          </Link>
        </>
      )}
    </div>
  );
};
