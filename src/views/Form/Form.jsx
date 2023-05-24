import style from './Form.module.css'
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import validation from "./validations";
import { getTypes, postPokemon } from "../../redux/actions";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Accedemos al estado almacenado en el store de redux y obtenemos los tipos de pokemon disponibles
  const { pokemonsTypes } = useSelector((state) => state);

  useEffect(() => {
    if(pokemonsTypes.length === 0){
      dispatch(getTypes())
    }
  }, [dispatch])
  
  // Inicializamos el estado del formulario con sus respectivas propiedades
  const [form, setForm] = useState({
    name: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });
  
  const [errorMessage, setErrorMessage] = useState({});
  
  // Función que maneja los cambios en los campos del formulario
  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });

    const errors = validation({ ...form, [property]: value });
    setErrorMessage(errors);
  };

  // Función que maneja la seleccion de tipos de pokemon
  const handleSelect = (event) => {
    const newType = event.target.value;
    if (form.types.includes(newType)) {
      alert("That type is already selected");
      return;
    }

    setForm({ ...form, types: [...form.types, newType] });
    event.target.value = "";
  };


  //Funcion para manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(postPokemon(form));
    alert("Pokemon added successfully");

    setForm({
      name: "",
      image: "",
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      types: [],
    });

    navigate("/home");
  };

  const disableSubmit = () => {
    if(!form.name || !form.height || !form.weight || !form.hp || form.types.length === 0 || !form.image) return false;
    if(errorMessage.name || errorMessage.height || errorMessage.weight || errorMessage.hp || errorMessage.types || errorMessage.image) return false;
    return true;
  }

  return (
    <div className={style.body}>
      <div>
          <Link to="/home" className={style.link}>
            <button className={style.boton}>Home</button>
          </Link>
        <form onSubmit={handleSubmit} className={style.form}>
          <div>
            <label htmlFor="name" className={style.label}>Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="name"
              autoComplete="off"
              value={form.name}
              onChange={changeHandler}
              className={style.inputs}
            />{" "}
            {errorMessage.name && <p style={{color:'red'}}>{errorMessage.name}</p>}
          </div>

          <div>
            <label htmlFor="hp" className={style.label}>Health points</label>
            <input
              type="number"
              name="hp"
              id="hp"
              placeholder="health points"
              autoComplete="off"
              value={form.hp}
              onChange={changeHandler}
              className={style.inputs}
            />
            {errorMessage.hp && <p style={{color:'red'}}>{errorMessage.hp}</p>}
          </div>

          <div>
            <label htmlFor="attack" className={style.label}>Attack</label>
            <input
              type="text"
              name="attack"
              id="attack"
              placeholder="attack"
              autoComplete="off"
              value={form.attack}
              onChange={changeHandler}
              className={style.inputs}
            />
            {errorMessage.attack && <p style={{color:'red'}}>{errorMessage.attack}</p>}
          </div>

          <div>
            <label htmlFor="defense" className={style.label}>Defense</label>
            <input
              type="text"
              name="defense"
              id="defense"
              placeholder="defense"
              autoComplete="off"
              value={form.defense}
              onChange={changeHandler}
              className={style.inputs}
            />
            {errorMessage.defense && <p style={{color:'red'}}>{errorMessage.defense}</p>}
          </div>

          <div>
            <label htmlFor="speed" className={style.label}>Speed</label>
            <input
              type="text"
              name="speed"
              id="speed"
              placeholder="speed"
              autoComplete="off"
              value={form.speed}
              onChange={changeHandler}
              className={style.inputs}
            />
            {errorMessage.speed && <p style={{color:'red'}}>{errorMessage.speed}</p>}
          </div>

          <div>
            <label htmlFor="height" className={style.label}>Height</label>
            <input
              type="text"
              name="height"
              id="height"
              placeholder="height"
              autoComplete="off"
              value={form.height}
              onChange={changeHandler}
              className={style.inputs}
            />
            {errorMessage.height && <p style={{color:'red'}}>{errorMessage.height}</p>}
          </div>

          <div>
            <label htmlFor="weight" className={style.label}>Weight</label>
            <input
              type="text"
              name="weight"
              id="weight"
              placeholder="weight"
              autoComplete="off"
              value={form.weight}
              onChange={changeHandler}
              className={style.inputs}
            />
            {errorMessage.weight && <p style={{color:'red'}}>{errorMessage.weight}</p>}
          </div>

          
          <div>
            <label className={style.label}> Types </label>
              <select onChange={handleSelect} className={style.select} >
                <option value={form.types} className={style.option}> Select types</option>
                {pokemonsTypes?.map((type) => {
                  return (
                    <option key={type.id} name={type.id} value={type.id}>
                      {type.name}
                    </option>
                  );
                })}
              </select>
              {errorMessage.types && <p style={{ color: 'red' }}>{errorMessage.types}</p>}
            <ul>
              {
                pokemonsTypes?.map((type) => {
                    if(form.types.includes(type.id.toString())) {
                      return (
                        <li key={type.id}>{type.name}</li>
                      )
                    }
                })
              }
            </ul>
          </div>
          <div>
            <label htmlFor="image" className={style.label}>Image</label>
            <input
              type="text"
              name="image"
              id="image"
              placeholder="url of the image"
              size="20"
              autoComplete="off"
              value={form.image}
              onChange={changeHandler}
              className={style.inputs}
            />
          {errorMessage.image && <p style={{color:'red'}}>{errorMessage.image}</p>}
          </div>
          <div></div>

          <button type="submit" className={style.create} disabled={!disableSubmit()}>Create Pokemon</button>
        </form>
      </div>
    </div>
  );
};

export default Form;