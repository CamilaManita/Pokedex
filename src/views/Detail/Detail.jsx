import style from "./Detail.module.css";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cleanDetail, getDetail } from "../../redux/actions";

const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const pokemon = useSelector((state) => state.pokemonDetail);
  const dispatch = useDispatch();


  console.log(pokemon);
  useEffect(() => {
    dispatch(getDetail(id))
    .then(() => setLoading(false))
    .catch(() => setLoading(false))
    return () => dispatch(cleanDetail());
  }, [id, dispatch]);

  return (
    <div className={style.body}>
              <Link to="/home" className={style.link}>
                <button>Home</button>
              </Link>
      <div className={style.container}>
        {loading?(
          <div> Cargando </div>
        ): !pokemon.id ? (
            <div> 
              <h1>El pokemon no existe</h1>
            </div>
        ) : (
          <div>
            <div>
              <h1>{pokemon.name}</h1>
            </div>

            <div className={style.detail}>
              <div className={style.containerImg}>
                <img src={pokemon.image} alt={pokemon.name} />
              </div>

              <div>
                <p>Id: {pokemon.id}</p>
                <p>Health points: {pokemon.hp}</p>
                <p>Attack: {pokemon.attack}</p>
                <p>Defense: {pokemon.defense}</p>
                <p>Speed: {pokemon.speed}</p>
                <p>Height: {pokemon.height}</p>
                <p>Weight: {pokemon.weight}</p>
                <p>
                  {" "}
                  Type/s:
                  {pokemon.types?.map((type) => {
                    return (
                      <ul>
                        <li key={pokemon.type}>{type}</li>
                      </ul>
                    );
                  })}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
