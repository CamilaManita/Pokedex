import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Form = () => {

    //Imágenes de los pokemones para seleecionar
    const imgP1 = '../../../Imagenes/Pokemon (118).png';
    const imgP2 = '../../../Imagenes/Pokemon (128).png';
    const imgP3 = '../../../Imagenes/Pokemon (146).png';
    const imgP4 = '../../../Imagenes/Pokemon (152).png';
    const imgP5 = '../../../Imagenes/Pokemon (189).png';
    const imgP6 = '../../../Imagenes/Pokemon (190).png';
    const imgP7 = '../../../Imagenes/Pokemon (191).png'
    const imgP8 = '../../../Imagenes/Pokemon (192).png'

    const pokemonImages = [imgP1, imgP2, imgP3, imgP4, imgP5, imgP6, imgP7, imgP8];

    const navigate = useNavigate();

    //Estado local para mostrar las imágenes
    const [showImage, setShowImage] = useState(false);
    //Estado local para manejar la imagen seleccionada
    const [selectedImage, setSelectedImage] = useState(null)
    //Estado local para manejar los tipos de pokemon seleccionados
    const [selectedType1, setSelectedType1] = useState(null);
    const [selectedType2, setSelectedType2] = useState(null);

    const [errorMessage, setErrorMessage] = useState('');

    const [form, setForm] = useState({
        name: '',
        image: '',
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        types: []
    });


    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setForm({...form, [property]: value})
    }

    const handleInputChange = useCallback(
        // Actualizamos el estado local con los valores del formulario
        (event) => {
            // Obtenemos el nombre y el valor del input que generó el evento
            const { name, value } = event.target;
            // Actualizamos el estado local con los valores del input que generó el evento
            setFormValues((prevState) => ({ ...prevState, [name]: value }));
            console.log(formValues);
        }, []
    )

    // axios.post('http://localhost:3001/pokemons', form)
    // .then(res => alert(res))
    //Funcion para manejar el envío del formulario
    const handleSubmit = async (event) => {
        event.preventDefault();
        //Actualizamos el valor de la variable imagen del formulario, con la seleccioanda
        form.image = selectedImage;
        //Actualizamos el valor de la variable types del formulario, con los seleccionados
        form.types.push(selectedType1);
        if (selectedType2) {
            form.types.push(selectedType2);
        }

        try {
            //Llamamos a la función que crea un nuevo pokemon y guardamos la respuesta en una variable
            const newPokemon = await createPokemon(form);

            //Reseteamos el form a su estado inicial
            resetForm();

            //Actualizamos el estado global con el nuevo pokemon
            await getPokemonDetail(newPokemon.id)

            // Redireecionamos a la ruta donde se puede ver el detalle del nuevo pokemon
            navigate(`/pokemon/${newPokemon.id}`);
        } catch (error) {
            if (error.message.includes('400')) {
                setErrorMessage('There is already a Pokemon with that name, enter a different one.')
            }
        }
    };

    // Función para manejar la selección de la imagen
    const handleClickImage = (image) => {
        //Actualizamos el estado con la imagen seleccionada
        setSelectedImage(image);
        setShowImage(false);
    };

    //Función para manejar el cambio del primer tipo del pokemon (campo obligatorio)
    const handleType1Change = (event) => {
        //Obtenemos el valor de la opación que se seleccionó
        const { value } = event.target

        //Si hay un segundo tipo seleccionado
        if (selectedType2) {
            //Pero el valor seleccionado es igual al primero
            if (selectedType2 === value) {
                //Actualizamos el estado del segundo tipo con null ya que los tipos no pueden ser iguales
                setSelectedType2(null);
            }
        }
        // Actualizamos el estado del tipo1 con el valor seleccionado
        setSelectedType1(value);
    }

    //Función para manejar el cambio del segundo tipo (opcional)
    const handleType2Change = (event) => {
        //Obtenemos el valor de la opción que se seleccionó
        const {value} = event.target;

        // Actualizamos el estado del tipo2 con el valor seleccionado
        setSelectedType2(value);
    };

    const isFormValid = () => {
        return form.name && selectedType1 && selectedImage;
    }





    return (
        <div>
            {
                showImage && (
                    <div>
                        <button
                            onClick={() => setShowImage(false)}
                        >
                            Close
                        </button>

                        <div>
                            {pokemonImages.map((pk, index) => (
                            <img
                                key={index}
                                src={pk}
                                alt={`Opción ${index + 1}`}
                                onClick={() => handleClickImage(pk)}
                            />
                            ))}
                        </div>
                    </div>
                )
            }

            <div>
                {
                    selectedImage && (
                    <motion.img src={selectedImage} 
                        alt="Pokemon" 
                        title="Click to change image"
                        onClick={() => setShowImage(true)} 
                        variants={image}
                        initial="hidden"
                        animate="visible"
                        whilehover="hover"
                    />
                    )
                }
                {
                !selectedImage && (
                    <button type="button" onClick={() => setShowImage(true)}>
                    Select Image
                    </button>
                )
                }
            </div>

            {/* SECCIÓN PARA EL FORMULARIO */}
            <div>
                    <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                        Name
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            placeholder="Enter the name"
                            onChange={handleInputChange}
                            required
                        />
                        </label>
                    </div>
                    <div>

                        <div>
                            <label>
                                First Type
                                <select
                                name="type1"
                                value={ form.types.length >= 1 ? form.types.length[0] : selectedType1 }
                                onChange={handleType1Change}
                                required
                                >
                                    <option value="fire">Fire</option>
                                    <option value="water">Water</option>
                                    <option value="electric">Electric</option>
                                    <option value="grass">Grass</option>
                                    <option value="ice">Ice</option>
                                    <option value="fighting">Fighting</option>
                                    <option value="poison">Poison</option>
                                    <option value="ground">Ground</option>
                                    <option value="flying">Flying</option>
                                    <option value="psychic">Psychic</option>
                                    <option value="bug">Bug</option>
                                    <option value="rock">Rock</option>
                                    <option value="ghost">Ghost</option>
                                    <option value="dragon">Dragon</option>
                                    <option value="dark">Dark</option>
                                    <option value="steel">Steel</option>
                                    <option value="fairy">Fairy</option>
                                </select>
                            </label>
                        </div>

                        <div>

                            {
                                selectedType1 && (
                                <label>
                                    Second Type
                                    <select
                                    name="type2"
                                    value={ form.types.length === 2 ? form.types.length[1] : selectedType2 }
                                    onChange={handleType2Change}
                                    >
                                        <option value="fire">Fire</option>
                                        <option value="water">Water</option>
                                        <option value="electric">Electric</option>
                                        <option value="grass">Grass</option>
                                        <option value="ice">Ice</option>
                                        <option value="fighting">Fighting</option>
                                        <option value="poison">Poison</option>
                                        <option value="ground">Ground</option>
                                        <option value="flying">Flying</option>
                                        <option value="psychic">Psychic</option>
                                        <option value="bug">Bug</option>
                                        <option value="rock">Rock</option>
                                        <option value="ghost">Ghost</option>
                                        <option value="dragon">Dragon</option>
                                        <option value="dark">Dark</option>
                                        <option value="steel">Steel</option>
                                        <option value="fairy">Fairy</option>
                                    </select>
                                </label>
                                )
                            }
                            </div>
                        </div>

                        <div>
                            <label htmlFor="image">Image: </label>
                            <input type="text" name="image" value={form.image} onChange={changeHandler}/>
                        </div>
                        <div>
                            <label htmlFor="hp">Hp: </label>
                            <input type="number" name="hp" value={form.hp} onChange={changeHandler}/>
                        </div>
                        <div>
                            <label htmlFor="attack">Attack: </label>
                            <input type="number" name="attack" value={form.attack} onChange={changeHandler}/>
                        </div>
                        <div>
                            <label htmlFor="defense">Defense: </label>
                            <input type="number" name="defense" value={form.defense} onChange={changeHandler}/>
                        </div>
                        <div>
                            <label htmlFor="speed">Speed: </label>
                            <input type="number" name="speed" value={form.speed} onChange={changeHandler}/>
                        </div>
                        <div>
                            <label htmlFor="height">Height: </label>
                            <input type="number" name="height" value={form.height} onChange={changeHandler}/>
                        </div>
                        <div>
                            <label htmlFor="weight">Weight: </label>
                            <input type="number" name="weight" value={form.weight} onChange={changeHandler}/>
                        </div>

                        {
                        errorMessage && (
                            <div>
                            <p> {errorMessage} </p>
                            </div>
                        )
                        }

                        <button type="submit" disabled={!isFormValid()} >Create Pokemon</button>
                        </form>
                    </div>
            
        </div>
    )
}

export default Form ;



                // <label htmlFor="types">Types: </label>
                // <select multiple value={form.types} onChange={(e) => setForm({...form, types: Array.from(e.target.selectedOptions, option => option.value)})}>
                    // <option value="fire">Fire</option>
                    // <option value="water">Water</option>
                    // <option value="electric">Electric</option>
                    // <option value="grass">Grass</option>
                    // <option value="ice">Ice</option>
                    // <option value="fighting">Fighting</option>
                    // <option value="poison">Poison</option>
                    // <option value="ground">Ground</option>
                    // <option value="flying">Flying</option>
                    // <option value="psychic">Psychic</option>
                    // <option value="bug">Bug</option>
                    // <option value="rock">Rock</option>
                    // <option value="ghost">Ghost</option>
                    // <option value="dragon">Dragon</option>
                    // <option value="dark">Dark</option>
                    // <option value="steel">Steel</option>
                    // <option value="fairy">Fairy</option>
                // </select>