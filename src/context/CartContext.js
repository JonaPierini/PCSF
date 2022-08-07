import React, { createContext, useState } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  //children al estar envolviendo toda la app por medio del CartProvider que esta en el app
  //tiene toda la informacion de todos los componentes
  // Carrito la llamo en CartScreen
  const [carrito, setCarrito] = useState([]);
  console.log(carrito);
  // esta funcion la llamo en ItemDetail con handleAgregar
  const addToCart = (item) => {
    //carrito.push(item) => seria hacer eso
    setCarrito([...carrito, item]);
  };
  // esta funcion la llamo en CartScreen
  const removerItem = (itemId) => {
    const newCart = carrito.filter((prod) => prod.id !== itemId);
    setCarrito(newCart);
  };
  // Esta funcion la llamo en CartWidget para que se me vea en el natbar
  const calcularCantidad = () => {
    // recorre un array y me retorna la suma de esos elemento. Recibe dos parametros un acumulador (acc) y el prod que quiero que sume
    // el 0 es el valor inicial del acumulador. Como reccore carrito
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  };
  // la llamo en CartScreen
  const vaciarCarrito = () => {
    setCarrito([]);
  };
  // la llamo en CartScreen
  const calcularTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad * prod.price, 0);
  };

  // Este metodo (some) retorna true o false. Si existe en el array me retorna true sino, false.
  // Lo llamo en ItemDetail
  const isInCart = (itemId) => {
    return carrito.some((prod) => prod.id === itemId);
  };
  return (
    <CartContext.Provider
      value={{
        addToCart,
        removerItem,
        calcularCantidad,
        carrito,
        vaciarCarrito,
        calcularTotal,
        isInCart,
      }}
    >
      {children} 
      {/* Todos los hijos van a acceder a esos metodos => los children=s son los demas componentes */}
    </CartContext.Provider>
  );
};
