import Cards from "../../components/Cards/Cards";
import { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { getPokemons, getTypes} from "../../redux/actions";
import NavBar from "../../components/NavBar/NavBar";
import { Paginacion } from "../../components/Paginated/Paginacion";
import style from './Home.module.css'

const Home = ({pokemons}) => { 
    const dispatch = useDispatch();
    const allPokemons = useSelector((state) => state.allPokemons);

    // ----------- PAGINADO ----------------

    //uso useState para definir los estados locales del componente,cuando llamo a (1) y (12) se estableces los valores iniciales ahí
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(12);
    
    const pagination = (pageNumber) => {
        setPerPage(pageNumber === 1 ? 12 : 12);
        setCurrentPage(pageNumber)
    }

    //Compuedo si la pagina es la primera, si es así devuelvo el index del último país allí, de lo contrario devuelvo el i del ultimo pais de la pagina donde esté

    const indexOfLast = currentPage === 1 ? currentPage * perPage : currentPage * perPage - 1;
    
    //Resto para obtener el primer pokemon de la pagina actual
    const indexOfFirst = indexOfLast - perPage;
    
    //Renderizo la lista de pokemones paginada
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
            <NavBar />

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

// export default Home;

const mapStateToProps = (state) => {
    return {
        pokemons: state.pokemons
    }
}

export default connect(
    mapStateToProps,
    null
)(Home);