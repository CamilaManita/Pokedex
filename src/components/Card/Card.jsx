import { Link } from 'react-router-dom';
import style from './Card.module.css';

const Card = ({id, name, image, types}) => {
    return (
        <div className={style.card}>
            <Link to={`/detail/${id}`}>
                <p>{name}</p>
                <img src={image} alt={name}/>
                <p>Types: {types}</p>
            </Link>
        </div>
    )
}

export default Card;