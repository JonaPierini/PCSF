import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Productos from '../Productos/Productos'
import { ItemList } from './ItemList'
 

export const ItemListConteiner = () => {
    
    const [articulos, setArticulos] = useState([])
    const [loadin, setLoadin] = useState(false)

    //Hook de la libreria ROUTER para manejar los parametros de categoria. Tiene que tener el mismo nombre
   const {categoryId} = useParams()
 
   // console.log(articulos) // primero esta vacio y luego se actualiza
    const pedirProductos = () =>{
        return new Promise((resolve, rejeact) =>{
            setTimeout(()=>{
                resolve(Productos) // aca la promesa esta en estado pendiente. Se le pasa el valor que quiero que muestre. La promesa se cumple 
            }, 1500)
        })
    }

    useEffect(() => {
        pedirProductos() 
        .then((resp=>{ // Con el .then se resuelve la promesa. Resolve(Productos) pasa a ser resp
            // Uso el filter en USE PARMS
            if(categoryId){
                //prod.category es el objeto de mis prodcutos
                setArticulos(resp.filter(prod => prod.category === categoryId))
            } else{
                setArticulos(resp)
            }
            // SI NO QUIERO FILTRAR USO DIRECTAMENTE ESTO: setArticulos(resp)  aca la promesa se resuelve y ACTUALIZA el estado y le paso el nuevo valor
            setLoadin(true) // Ya esta resuelto
        }))
    }, [categoryId])
  

    return (
        <>
            ItemLisConteiner
            {
                loadin  ? <ItemList articulos = {articulos}/>
                        : <h2> Cargando....</h2>
            }
        </>
    )
}
