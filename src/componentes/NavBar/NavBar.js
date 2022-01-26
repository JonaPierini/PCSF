import React from 'react'
import { Link } from 'react-router-dom'
import { CartWidget } from './CartWidget';


export const NavBar = () => {
    return (
        <nav className = 'NavBar'>
             <Link to='/'>Inicio</Link>
             <Link to= '/productos/zapatos'>Zapatos</Link>
             <Link to= '/productos/remeras'>Remeras</Link>
             <Link to='/nosotros'>Nosotros</Link>
             <Link to = '/carrito'>{<CartWidget/>}</Link>
        </nav>
    )
}
