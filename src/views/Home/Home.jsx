import Cards from "../../components/Cards/Cards";
import { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { getPokemons, getTypes} from "../../redux/actions";
import NavBar from "../../components/NavBar/NavBar";
import { Paginacion } from "../../components/Paginated/Paginacion";
import style from './Home.module.css'

const Home = () => { 
    const dispatch = useDispatch();
    //Obtenemos la lista de todos los pokemons 
    const allPokemons = useSelector((state) => state.allPokemons);
    const pokemons = useSelector(state => state.pokemons);

    // ----------- PAGINADO ----------------

    //uso useState para definir los estados locales del componente, tambien estas variables guardan el número de la página actual
    const [currentPage, setCurrentPage] = useState(1);
    //Guarda la cantidad de pokemons que quiero mostrar po página
    const [perPage, setPerPage] = useState(12);
    
    // Cuando llamamos esta funcion con un número de página, se actualiza la cantidad que se muestra por página y tambien cambia la pagina    
    const pagination = (pageNumber) => {
        setPerPage(pageNumber === 1 ? 12 : 12);
        setCurrentPage(pageNumber)
    }

    //Compuedo si la pagina es la primera, si es así devuelvo el index del último pokemon allí, de lo contrario devuelvo el i del ultimo pokemon de la pagina donde esté

    const indexOfLast = currentPage === 1 ? currentPage * perPage : currentPage * perPage - 1;
    
    //Resto para obtener el primer pokemon de la pagina actual
    const indexOfFirst = indexOfLast - perPage;
    
    //Renderizo la lista de pokemones paginada, si tenemos la lista de pokemons completa, la cortamos para obtener lo que corresponde y sino utilizamos lo obtenido anteriormente
    const currentPokemons = pokemons.length
        ? pokemons.slice(indexOfFirst, indexOfLast)
        : allPokemons;
    // ----------- PAGINADO ----------------


    useEffect(() => {
        dispatch(getPokemons());
        dispatch(getTypes());
    }, [dispatch])


    return (
        <div className={style.body}>
            <NavBar setCurrentPage = {setCurrentPage} />

            {!pokemons.length ? (
                <div className={style.espera}>
                    <h1>One moment, please</h1>
                    <img src="https://media.tenor.com/8wfTNKNK99EAAAAi/snorlax-roll.gif" alt="Loading" />
                </div>
            ) : (
                <div>
                    <Cards pokemons={currentPokemons} />
                    <Paginacion pokemons={pokemons.length} pagination={pagination} perPage={perPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </div>
            )}


        </div>
    )
}

export default Home;