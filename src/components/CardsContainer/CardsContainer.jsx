import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from './CardsContainer.module.css'

const CardsContainer = () => {

    const pokemons = useSelector(state => state.pokemons)

    return(
        <div className={style.container}>
            {
                pokemons && pokemons.map(pokemon => {
                    return <Card
                        id = {pokemon.id}
                        name = {pokemon.name}
                        image = {pokemon.image}
                        // hp = {pokemon.hp}
                        // attack = {pokemon.attack}
                        // defense = {pokemon.defense}
                        // speed = {pokemon.speed}
                        // height = {pokemon.height}
                        // weight = {pokemon.weight}
                        types = {pokemon.types}
                    />
                })
            }
        </div>
    )
}

export default CardsContainer;

{/* <p> Este componente, tiene que tomar un array de usuarios y por cada usuario, renderizar un componente Card</p> */}




// import Card from '../Card/Card';

// const Cards = ({ pokemons, onClose }) => {
//     return (
//         <div>
//             {
//                 pokemons.map(({id, name, status, species, gender, origin, image}) => {
//                     return ( 
//                         <Card
//                             key={id}
//                             id={id}
//                             name={name}
//                             status={status}
//                             species={species}
//                             gender={gender}
//                             origin={origin.name}
//                             image={image}
//                             onClose={onClose}
//                         />
//                     )
//                 })
//             }
//         </div>
//     )
// }

// export default Cards;