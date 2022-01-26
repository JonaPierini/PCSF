import React from 'react'
import { Item } from './Item'

export const ItemList = ({articulos}) => {
    return (
        <div className='tarjetasProductos' >
            {
                articulos.map(item=>
                <Item key={item.id} item = {item}></Item>)
            }
        </div>
    )
}
