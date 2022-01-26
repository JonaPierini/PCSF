import React, {useState, useEffect} from 'react'
// Es para hacer peticiones y consumir APIS. Es una promesa
export const PeticionesFetch = () => {

    const [pokemon, setPokemon] = useState({})
    const [input, setInput] = useState('')
    const [lista, setLista] = useState([pokemon])
    const [cargando, setCargando] = useState(false)
    console.log(pokemon)
   
    
    const handleInput = (e) =>{
            setInput(e.target.value)
            console.log(e.target.value)
    }

    const handleForm = (e) =>{
        e.preventDefault()
        fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
            .then(response => response.json()) // .json retorna una promesa
            .then(data => setPokemon({ // aca ya veo la respuesta de esta información
                id: data.id,
                nombre: data.name,
                img: data.sprites.back_default            
            }))
            setCargando(true)
        //    .catch(error=>console.log({
        //        'no encontrado': error
        //    }))
           if(input !== ''){
                setLista([pokemon, ...lista])
                setInput('')
        
           }
        
    } 
    
   

    return (
        <>
           <form onSubmit={handleForm}>
                <input
                        type='text'
                        value={input}
                        onChange={handleInput}
                            >
                </input>
           </form>
           { cargando ? 
            (<div>
                <h1>{pokemon.nombre}</h1>
                <h1>{pokemon.id}</h1>
                <img src={pokemon.img} alt={pokemon.id}></img> 
                
                {
                    lista.map((item, i)=><div key={i}>
                                                <h1>{item.nombre}</h1>
                                                <h1>{item.id}</h1>
                                                <img src={item.img} alt={item.id}></img>
                                            </div>)
                }
            </div> ) : <h1>Ingrese valores</h1>
        }
        </>
    )
}
