import React, {useEffect, useState} from 'react'

export const PeticionesFetchDos = () => {

    const [pokemon, setPokemon] = useState({})
    const [id, setId] = useState(0)
    const [valor, setValor] = useState('')
     
     
    useEffect(() => { // cada vez que se modifique el ID se vuelve a disparar y se guarda en la dependencia del ARRAY
            if(id > 0 ){
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response=>response.json())
            .then(data=>setPokemon({
                nombre: data.name,
                id: data.id,
                img: data.sprites.back_default   
                  
            }))
        }
             
         
    }, [id])

    const handleSiguiente = () =>{
        setId(id + 1)
    }

    const handleAnterior = () =>{
        if(id > 1) {
            setId(id - 1)
        }        
    }

    useEffect(() => {
        if(valor !== '' ){
            fetch(`https://pokeapi.co/api/v2/pokemon/${valor}`)
            .then(response=>response.json())
            .then(data=> {
                setPokemon({
                nombre: data.name,
                id: data.id,
                img: data.sprites.back_default   
                
            })
                setId(data.id)
            })
            
            .catch(error=>{
                console.log(error)
                setPokemon({
                    nombre: 'Pokemon no encontrado'
                })
            })
          
    }
     
    }, [valor])

    const handleInput = (e) =>{
        setValor(e.target.value)
         
    }

    const handleForm = (e) =>{
         
            e.preventDefault()
             setPokemon(pokemon)
             setValor('')
          

    }


    return (
        <div>
            <button onClick={handleAnterior}>Anterior</button>
            <button onClick={handleSiguiente}>Siguiente</button>
            <div>
                <h3>{pokemon.nombre}</h3>
                <h3>{pokemon.id}</h3>
                <img src={pokemon.img} alt={pokemon.id}></img>
            </div> 
            <form onSubmit={handleForm} className='mt-3 mb-3'>
                <input className='form-control' onChange={handleInput}
                       value={valor}
                       type='text'></input>
            </form>
        </div>
    )
}
