import Cards from "../../components/Cards/Cards";
import { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { getPokemons, getTypes, order, filter } from "../../redux/actions";
import NavBar from "../../components/NavBar/NavBar";
import { Paginacion } from "../../components/Paginated/Paginacion";



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

    const orderHandler = (event) => {
        event.preventDefault();
        dispatch(order(event.target.value))
    }

    const filterType = (event) => {
        dispatch(filter(event.target.value))
    };

    return (
        <div>
            <NavBar />
            <select onChange={(event) => orderHandler(event)}>
                <option value='none'>Order</option>
                <option value='A'>A-Z</option>
                <option value='D'>Z-A</option>
                <option value='W'>Weakness</option>
                <option value='S'>Strong</option>
            </select>

            <select onChange={ types => {filterType(types)} }>
                <option value='all'>Types</option>
                <option value='normal'>normal</option>
                <option value='rock'>rock</option>
                <option value='water'>water</option>
                <option value='dragon'>dragon</option>
                <option value='flying'>flying</option>
                <option value='ghos'>ghost</option>
                <option value='electric'>electric</option>
                <option value='fairy'>fairy</option>
                <option value='poison'>poison</option>
                <option value='steel'>steel</option>
                <option value='psychic'>psychic</option>
                <option value='unknown'>unknown</option>
                <option value='fighting'>fighting</option>
                <option value='fire'>fire</option>
                <option value='ice'>ice</option>
                <option value='shadow'>shadow</option>
                <option value='ground'>ground</option>
                <option value='bug'>bug</option>
                <option value='grass'>grass</option>
                <option value='dark'>dark</option>
            </select>

            {!pokemons.length ? (
                <div>
                    <h1>One moment, please</h1>
                </div>
            ) : (
                <div>
                    <Paginacion pokemons={pokemons.length} pagination={pagination} perPage={perPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    <Cards pokemons={currentPokemons} />
                </div>
            )}


        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        pokemons: state.pokemons
    }
}

export default connect(
    mapStateToProps,
    null
)(Home);