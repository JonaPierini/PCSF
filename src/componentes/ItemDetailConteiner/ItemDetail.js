 import React, {useContext, useState} from 'react'
 import { Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { ItemCount } from '../ItemCount/ItemCount';
 
 export const ItemDetail = ({id, img, name, price, description, stock}) => {

    //Este estado es pasado por propiedades al ItemCount. El cual se crea aca adentro 
    // porque son los item individuales de cada producto
    const [cantidad, setCantidad] = useState(1)

    // Llamo mi Context en forma desestructurada
    const {addToCart, isInCart} = useContext(CartContext)

    const handleAgregar = () =>{
        const newItem = {
               id,
               name ,
               price ,
               cantidad // Esto no es un propiedad del objeto PRODUC, sino lo que es es el estado CANTIDAD
        }
        // LLamo a la funcion addToCart que cree en el contexto y le paso el nuevo valor del NewItem, que va a ser inicializado
        // en vacio mas el valor que le paso por parametro(newItem)
        if(cantidad > 0){
            addToCart(newItem)
        }
    }
     return (
         <div style={{ height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px' }}>
               <Card style={{ width: '18rem'}}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>${price}</Card.Text>
                        <Card.Text>{description}</Card.Text>
                        { isInCart(id)
                            ? <>
                                <Link to= '/carrito'>Finalizar Compra</Link>
                              </>
                            : <>
                                <Link to = '/'>
                                    <Button  variant="primary">Volver</Button>
                                </Link>
                                {/* Llamo al componente ItemCount y le paso las propiedades del UseState. 
                                Le paso Stock para controlar la cantidad maxima a comprar pero no
                                hace falta con la idea de pasar el estado por parametrps */ }
                                <ItemCount cantidad = {cantidad} setCantidad = {setCantidad} stock={stock}></ItemCount> 
                                 {/* LLamo a la funcion HandleAddToCart que crea un objeto con la información del newObjeto que creo*/}
                                <button onClick={handleAgregar}>Agregar</button>
                              </>
                        }
                    </Card.Body>
                </Card>     
         </div>
     )
 }
 
