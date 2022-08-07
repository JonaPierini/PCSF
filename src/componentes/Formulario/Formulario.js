import React, { useState } from 'react';

export const Formulario = () => {


  const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        email: '',
  })

  const handleInputValue = (e) =>{
        console.log(e.target.value)
        console.log(e.target.name)
        setValues({
            ...values, //copio todas las propiedades que ya tenia el objeto => osea una string
            [e.target.name] : e.target.value, // aca lo sobre escribe => asi es la sintaxis
        })
  }

  const handleSubmit = (e) =>{
      e.preventDefault()
      console.log(values)
  }

  return (
    <>
        <form  onSubmit={handleSubmit}>
            <div  className='p-2 bg-light border'>
                <input className='form-control'
                    placeholder='Nombre'
                    name='nombre'
                    value={values.nombre}
                    onChange={handleInputValue}>
                </input>
            </div>
            <div  className='p-2 bg-light border'>
                <input className='form-control'
                    placeholder='Apellido'
                    name='apellido'
                    value={values.apellido}
                    onChange={handleInputValue}>
                </input>
            </div>
            <div className='p-2 bg-light border'>
                <input className='form-control'
                    placeholder='Email'
                    name='email'
                    value={values.email}
                    onChange={handleInputValue}>
                </input>
            </div>
            <div  className='d-grid gap-2 m-2'>
                <button className='btn btn-primary'>Enviar</button>
            </div>
        </form> 
    </>
  );
};
