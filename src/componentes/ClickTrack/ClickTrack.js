import React, {useState} from 'react'

export const ClickTrack = () => {

    const [contador, setContador] = useState(0)

    const handleCantidad=()=>{
            setContador(contador + 1)
            new Date().toLocaleString()
    }

    return (
        <div>
            <button onClick={handleCantidad}>Click Me</button>
            <h3>Cantidad click: {contador}</h3>
            <h3>Fecha y Hora: {new Date().toLocaleString()}</h3>
            {
                contador === 10 ? <h1>Mira que ya llevas 10 unidades</h1> : <h1>Es poco</h1>
            } 
        </div>
    )
}
