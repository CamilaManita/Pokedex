import style from './Card.module.css';

const Card = (props) => {
    return (
        <div className={style.card}>
            {/* <p>Este componente debe mostrar la info de cada usuario mapeado, pero además darnos un link para ir al detalle del usuario en cuestion</p> */}
            <p>Name: {props.name}</p>
            <p>Image: {props.image}</p>
            <p>Hp: {props.hp}</p>
            <p>Attack: {props.attack}</p>
            <p>Defense: {props.defense}</p>
            <p>Speed: {props.speed}</p>
            <p>Height: {props.height}</p>
            <p>Weight: {props.weight}</p>
            <p>Types: {props.types}</p>
        </div>
    )
}

export default Card;



// import { useEffect, useState } from "react";
// import { connect } from "react-redux";
// import { Link } from "react-router-dom"

// const Card = (id, name, hp, image) => {

//     // const [isFav, setIsFav] = useState(false);

//     // const handleFavorite = () => {
//     //     if(isFav){
//     //         setIsFav(false);
//     //     } else {
//     //         setIsFav(true);
//     //     }
//     // }


//     return(
//         <div>
//             <div> 
//                 <img src={image} alt={name} /> 
//             </div>

//             <div>
//                 <div>
//                     <Link>
//                         <h2>{name}</h2>
//                     </Link>
//                 </div>

//                 <div>
//                     <h2>Hp: {hp}</h2>
//                 </div>

//                 <div>
//                     <button onClick={() => onClose(id)}>X</button>
//                 </div>
//                 <button onClick={handleFavorite} >{isFav ? '❤️' : '🤍' }</button>
//             </div>      
//         </div>
//     );
// }

// const mapStateToProps = (state) => {
//     return {
//         myFavorites: state.myFavorites
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         removeFav: (id) => {dispatch(removeFav(id))}
//     }
// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Card);