 import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Productos from '../Productos/Productos'
import { ItemDetail } from './ItemDetail'

 
 export const ItemDetailConteiner = () => {

    const [produc, setProduc] = useState({})

    // mismo nombre que el parametro que use
    const {itemId} = useParams()
   

    const promesa = () =>{
        return new Promise((resolve, rejeact) =>{
            resolve(Productos)
        })
    }

    useEffect(() => { // El useEffect es para el montaje y actualizaciones
        promesa()
        // Ya esta resuelta la promesa y pasa a estar dentro del .then((resp))
        .then((resp=>{
            // prod.id es mi arrray y itemId es el useParams. Uso Number porque es una string
                setProduc(resp.find(prod=>prod.id === Number(itemId)))
            }))
    }, [itemId])

     return (
         <div>
             {/* Los paso con el spreat operator para que ItemDetail lo reciba desestructurado */}
             <ItemDetail {...produc}></ItemDetail> 
         </div>
     )
 }
 