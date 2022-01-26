import React, {useState, useEffect} from 'react'

export const Horario = () => {

     
    const [time, setTime] = useState(new Date())
    

    useEffect(() => {
        setTimeout(() => {
            setTime(new Date())
        }, 1000);
    }, [time])
    
   

    return (
        <div>
            <h2>{time.toLocaleString()}</h2>          
        </div>
    )
}
