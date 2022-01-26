import './App.css';
import { ItemListConteiner } from './componentes/ItemListContainer/ItemListConteiner';
import { NavBar } from './componentes/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Footer } from './componentes/Footer/Footer';
import { ItemDetailConteiner } from './componentes/ItemDetailConteiner/ItemDetailConteiner.js';
import { CartContext } from './context/CartContext';
import { useState } from 'react';
import { CartScreen } from './componentes/CartScreen/CartScreen';



function App() {
    // Carrito la llamo en CartScreen
    const [carrito, setCarrito] = useState([])
        console.log(carrito)
    // esta funcion la llamo en ItemDetail con handleAgregar
    const addToCart = (item) =>{
        setCarrito([...carrito, item])
    }
    // esta funcion la llamo en CartScreen
    const removerItem = (itemId) =>{
        const newCart = carrito.filter((prod)=> prod.id !== itemId)
        setCarrito(newCart)
    }
    // Esta funcion la llamo en CartWidget para que se me vea en el natbar
    const calcularCantidad = () =>{
        // recorre un array y me retorna la suma de esos elemento. Recibe dos parametros un acumulador y el prod que quiero que sume
        // el 0 es el valor inicial del acumulador. Como reccore carrito
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }
    // la llamo en CartScreen
    const vaciarCarrito = () =>{
        setCarrito([])
    }
    // la llamo en CartScreen
    const calcularTotal = () =>{
        return carrito.reduce((acc, prod) => acc + prod.cantidad * prod.price, 0)
    }

    // Este metodo (some) retorna true o false. Si existe en el array me retorna true sino, false.
    // Lo llamo en ItemDetail
    const isInCart = (itemId) =>{
        return carrito.some(prod=> prod.id === itemId)
    }

  return (
    <div className="App">
        <CartContext.Provider value={
            {
            addToCart,
            removerItem,
            calcularCantidad,
            carrito,
            vaciarCarrito,
            calcularTotal,
            isInCart
            }
            }>
            <BrowserRouter>
                    <NavBar/> 
                        <Routes>

                            <Route exact path = '/' 
                                element={<ItemListConteiner/>}>
                            </Route>

                            <Route exact path = '/nosotros' 
                                element={<h1>Hacer componente</h1>}>
                            </Route>

                            {/* :NOMBRE es el valor dinamico, un parametro*/}
                            <Route exact path = '/productos/:categoryId' 
                                element= {<ItemListConteiner/>}>
                            </Route>

                            <Route exact path = '/detail/:itemId' 
                                element= {<ItemDetailConteiner/>}>
                            </Route>
                            
                            <Route exact path = '/carrito' 
                                 element={
                                <CartScreen/>}>
                            </Route>

                            <Route path="*" 
                                element={<Navigate to="/" />}>
                            </Route>

                        </Routes>
                        
                    <Footer/>   
            </BrowserRouter>
        </CartContext.Provider>
           
    </div>
  );
}

export default App;

