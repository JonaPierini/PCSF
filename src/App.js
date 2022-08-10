import "./App.css";
import { ItemListConteiner } from "./componentes/ItemListContainer/ItemListConteiner";
import { NavBar } from "./componentes/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Footer } from "./componentes/Footer/Footer";
import { ItemDetailConteiner } from "./componentes/ItemDetailConteiner/ItemDetailConteiner.js";
import {CartProvider } from "./context/CartContext";
import { CartScreen } from "./componentes/CartScreen/CartScreen";
import {Formulario} from './componentes/Formulario/Formulario'

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListConteiner />}></Route>

            <Route
              exact
              path="/nosotros"
              element={<h1>Hacer componente</h1>}
            ></Route>

            {/* :NOMBRE es el valor dinamico, un parametro*/}
            <Route
              exact
              path="/productos/:categoryId"
              element={<ItemListConteiner />}
            ></Route>

            <Route
              exact
              path="/detail/:itemId"
              element={<ItemDetailConteiner />}
            ></Route>

            <Route exact path="/carrito" element={<CartScreen />}></Route>

            <Route exact path="/formulario" element={<Formulario></Formulario>}></Route>
            <Route path="*" element={<Navigate to="/" />}></Route>
            
          </Routes>

          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
