import style from './Detail.module.css'
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cleanDetail, getDetail } from "../../redux/actions";

const Detail = () => {
  const { id } = useParams();
  const { name, image, hp, attack, defense, speed, height, weight, types } = useSelector((state) => state.pokemonDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(id));
    return () => dispatch(cleanDetail());
  }, [id, dispatch]);

  return (
    <div className={style.body}>
      <div className={style.container}>
        <div>
          <div>
            <button>
              <Link to="/home" className={style.link}>Home</Link>
            </button>
            <h1>{name}</h1>
          </div>
        
          <div className={style.detail}>
            <div className={style.containerImg}>
              <img src={image} alt={name} />
            </div>

            <div>
              <p>Id: {id}</p>
              <p>Health points: {hp}</p>
              <p>Attack: {attack}</p>
              <p>Defense: {defense}</p>
              <p>Speed: {speed}</p>
              <p>Height: {height}</p>
              <p>Weight: {weight}</p>
              <p> Type/s:
                {types?.map((type) => {
                  return <ul>
                    <li key={type}>{type}</li>
                  </ul>
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;