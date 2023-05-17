import { useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { cleanDetail, getDetail } from "../../redux/actions";

const Detail = () => {
    const {id} = useParams();
    const [pokemon, setPokemon] = useState(null);
    const {name, image, hp, attack, defense, speed, height, weight, types} = useSelector(state => state.pokemonDetail)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetail(id))
        .then((data) => {
            if(data) {
                setPokemon(data);
            } else {
                window.alert('NO se pudo')
            }
        });
        return () => dispatch(cleanDetail());
    }, [id, dispatch])
    
    return (
        <div>
            <div>
                <div>
                    <button>
                        <Link to='/home'>Home</Link>
                    </button>
                    <h1>{name}</h1>
                </div>

                <div>
                    <div>
                        <img src={image} alt={name} />
                    </div>

                    <div>
                        <label htmlFor="hp">Health points: </label>
                        <p>{hp}</p>
                        
                        <label htmlFor="attack">Attack: </label>
                        <p>{attack}</p>
                        
                        <label htmlFor="defense">Defense: </label>
                        <p>{defense}</p>
                        
                        <label htmlFor="speed">Speed: </label>
                        <p>{speed}</p>
                        
                        <label htmlFor="height">Height: </label>
                        <p>{height}</p>
                        
                        <label htmlFor="weight">Weight</label>
                        <p>{weight}</p>
                        
                        <label htmlFor="types">Type/s: </label>
                        {/* <p>{types}</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail;

// useEffect(() => {
//     dispatch(getDetail(id)).then((data) => {
//         setPokemon(data) //Actualiza el estado con el objeto de Pokemón recibido
//     });
//     return() => dispatch(cleanDetail());
// }, [id, dispatch]);

// if(!pokemon){
//     return <div>Loading...</div> // Muestra un mensaje de carga mientras se obtiene el detalle del pokemon
// }