import React from 'react';

export const ItemCount = ({cantidad, setCantidad, stock}) => {

  const handleSumar = () =>{
      if(cantidad < stock){
        setCantidad(cantidad + 1) 
      }
      
  }

  const handleRestar = () =>{
      if(cantidad > 1) {
        setCantidad(cantidad - 1)
      }
   
}


  return  ( 
        <div>
           <h3>{cantidad}</h3>
            <button onClick={handleSumar}>+</button>
            <button onClick={handleRestar}>-</button>
        </div>
  );
};

