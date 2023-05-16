import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"


const Detail = () => {
    const {id} = useParams();
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        axios(`http://localhost:3001/pokemons/${id}`)
        .then(response => response.data)
        .then((data) => {
            if (data.name) {
                setPokemon(data);
            } else {
                window.alert(`There is no pokemon with the id: ${id}`);
            }
        });
        return setPokemon({});
    }, [id]);

    return (
        <div>
            <div>
                <div>
                    <button>
                        <Link to='/home'>Home</Link>
                    </button>
                    <h1>{pokemon?.name}</h1>
                </div>

                <div>
                    <div>
                        <img src={pokemon?.image} alt={pokemon?.name} />
                    </div>

                    <div>
                        <label htmlFor="name">Name: </label>
                        <p>{pokemon?.name}</p>

                        <label htmlFor="hp">Health points: </label>
                        <p>{pokemon?.hp}</p>
                        
                        <label htmlFor="attack">Attack: </label>
                        <p>{pokemon?.attack}</p>
                        
                        <label htmlFor="attack">Defense: </label>
                        <p>{pokemon?.attack}</p>
                        
                        <label htmlFor="speed">Speed: </label>
                        <p>{pokemon?.speed}</p>
                        
                        <label htmlFor="height">Height: </label>
                        <p>{pokemon?.height}</p>
                        
                        <label htmlFor="weight">Weight</label>
                        <p>{pokemon?.weight}</p>
                        
                        <label htmlFor="types">Type/s: </label>
                        <p>{pokemon?.types}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}