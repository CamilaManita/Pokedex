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
    <div>
      <div>
        <button>
          <Link to="/home">Home</Link>
        </button>
        <h1>{name}</h1>
        <p>Id: {id}</p>
        <p>Health points: {hp}</p>
        <p>Attack: {attack}</p>
        <p>Defense: {defense}</p>
        <p>Speed: {speed}</p>
        <p>Height: {height}</p>
        <p>Weight: {weight}</p>
        {types?.map((type) => {
          return <div key={type}>Type/s: {type}</div>;
        })}
        <img src={image} alt={name} />
      </div>
    </div>
  );
};

export default Detail;