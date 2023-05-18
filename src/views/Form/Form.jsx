import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import validation from "./validations";
import { postPokemon } from "../../redux/actions";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pokemonsTypes } = useSelector((state) => state);

  const [errorMessage, setErrorMessage] = useState({
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

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });

    setErrorMessage(validation({ ...form, [property]: value }));
  };

  const handleSelect = (event) => {
    const newType = event.target.value;
    if (form.types.includes(newType)) {
      alert("Ese tipo ya esta seleccionado");
      return;
    }

    setForm({ ...form, types: [...form.types, newType] });
    event.target.value = "";
  };

  //Funcion para manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(postPokemon(form));
    alert("Pokemon añadido exitosamente");

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

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Ingrese el nombre"
              autoComplete="off"
              value={form.name}
              onChange={changeHandler}
            />{" "}
            {errorMessage.name && <p>{errorMessage.name}</p>}
          </div>

          <div>
            <label htmlFor="hp">Hp</label>
            <input
              type="number"
              name="hp"
              id="hp"
              placeholder="Ingrese el hp"
              autoComplete="off"
              value={form.hp}
              onChange={changeHandler}
            />
            {errorMessage.hp && <p>{errorMessage.hp}</p>}
          </div>

          <div>
            <label htmlFor="attack">attack</label>
            <input
              type="number"
              name="attack"
              id="attack"
              placeholder="Ingrese el attack"
              autoComplete="off"
              value={form.attack}
              onChange={changeHandler}
            />
            {errorMessage.attack && <p>{errorMessage.attack}</p>}
          </div>

          <div>
            <label htmlFor="defense">Defense</label>
            <input
              type="number"
              name="defense"
              id="defense"
              placeholder="Ingrese defense"
              autoComplete="off"
              value={form.defense}
              onChange={changeHandler}
            />
            {errorMessage.defense && <p>{errorMessage.defense}</p>}
          </div>

          <div>
            <label htmlFor="speed">Speed</label>
            <input
              type="number"
              name="speed"
              id="speed"
              placeholder="Ingrese speed"
              autoComplete="off"
              value={form.speed}
              onChange={changeHandler}
            />
            {errorMessage.speed && <p>{errorMessage.speed}</p>}
          </div>

          <div>
            <label htmlFor="height">Height</label>
            <input
              type="number"
              name="height"
              id="height"
              placeholder="Ingrese height"
              autoComplete="off"
              value={form.height}
              onChange={changeHandler}
            />
            {errorMessage.height && <p>{errorMessage.height}</p>}
          </div>

          <div>
            <label htmlFor="weight">Weight</label>
            <input
              type="number"
              name="weight"
              id="weight"
              placeholder="Ingrese weight"
              autoComplete="off"
              value={form.weight}
              onChange={changeHandler}
            />
            {errorMessage.weight && <p>{errorMessage.weight}</p>}
          </div>

          <div>
            <select onChange={handleSelect}>
              <option value="">Types</option>
              {pokemonsTypes?.map((type) => {
                return (
                  <option key={type.id} name={type.id} value={type.name}>
                    {type.name}
                  </option>
                );
              })}
            </select>
            <ul>
              <li>{form.types.map((type) => type + " ")}</li>
            </ul>
          </div>
          <label htmlFor="image">Image</label>
          <input
            type="url"
            name="image"
            id="image"
            placeholder="Ingrese imagen"
            size="60"
            autoComplete="off"
            value={form.image}
            onChange={changeHandler}
          />
          {errorMessage.image && <p>{errorMessage.image}</p>}
          <div></div>

          <button type="submit">Create Pokemon</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
