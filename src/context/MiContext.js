// La idea del contexto es poder acceder a cualquier componente desde cualquier lado sin necesidad de usar propiedades

                        // import React, {createContext} from "react";
                        //  export const MiContext = createContext()

// DE ESTA FORMA se CREA EL CONTEXTO. El nombre que le puse al componente contexto es MiContext
// Este componente tiene que envolver a TODA LA APLICACION CON .PROVIDER, es decir va a estar por arriba de BrowserRouter en APP
// Asi se pone ==> <MiContext.Provider>y aca van todos los componentes</MiContext.Provider>
// Cuando llamo es MiContext.Provider tiene un atributo que es el VALUE, y los valores que les paso ahi adentro son los
// que van a ser poder accedidos desde cualquier lado
// Para que el hijo pueda acceder a ese contexto es por medio del useContext() ==> Ejemplo en el NavBar creo
// una varibale const contexto = useContext(MiContext) pasandole por Parametro el Contexto que cree y luego llamo a esa variable que le puse contexto donde la quiera utilizar dentro de es componente NavBar. ESte contexto puede ser utilizado en cualuquier componente.
// El value puede tener muchos valores y para eso hay que ponerle asi {{}} y llamar de forma destructurada a esos valores que quiero llamar. POR HAY COMPONENTES QUE VAN A COMPONER ALGO Y OTROS OTRA COSA.
//Ejemplo ==>
// APP COMPONENTE DONDE EVUELVE TODOA LA APLICACION EL CONTEXTO
// function App() {
  
//     let pepe = 'Numero'
//     let pepeDos = 'Numero Dos' 
   
//      return (
//        <div className="App">
//            <MiContext.Provider value={{pepe, pepeDos}}>
//                <BrowserRouter> ....


// COMPONENTE HIJO DONDE ESTOY CONSUMIENTO EL CONTEXTO
// export const CartWidget = () => {

//     const {pepe, pepeDos} = useContext(MiContext)

//     return (
//         <div>
//             <FaShoppingCart className='logoCarrito'/>
//             {pepe}
//             {pepeDos}
//         </div>
//     )
// }

// COMPONENTE que quiere consumir algo de ese value
// export const Navbar = () => {

//     const {pepe} = useContext(MiContext)

//     return (
//         <div>
//             <FaShoppingCart className='logoCarrito'/>
//             {pepe}
//             
//         </div>
//     )
// }

// ACOMODAR LAS COSAS

// PARA FINALIZAR lo que se hace, para que las funciones no queden todas desparramadas en el app, se crea un componente. Ejemplo
// CARTCONTEX.JS PERO COMO COMPONENTE y se pone asi:
// export const CartContext = createContext()
// exporte const CartProvider = ({children}) => {  ESTE SERIA EL COMPONENTE

// SE ponen todas las funciones, metodos que van en el contexto

// RETURN (
//      <CartContext.Provider value = {{
//              y todas las funciones, metodos del contexto
//}}>
//)         {children} QUE LOS CHILDREN SERIAN TODOS LOS COMPONENTES 
//      </CartContext.Provider>

//} 
// EN APP LO QUE SE HACE ES BORRAR TODAS LAS FUNCIONES Y METODOS QUE TENIA e IMPORTAR EL COMPONENTE CARTPROVIDER y 
// ponerlo que envulva a todos los componentes

