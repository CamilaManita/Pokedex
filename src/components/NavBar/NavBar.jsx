import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {order, filter} from '../../redux/actions';
import { getPokemons } from '../../redux/actions';

const NavBar = ({setCurrentPage}) => {

    const dispatch =  useDispatch();
    const {pokemonsTypes} = useSelector(state => state);

    const filterType = (event) => {
        event.preventDefault();
        const type = event.target.value;
        dispatch(filter(type));
        setCurrentPage(1);
    };

    const orderHandler = (event) => {
        event.preventDefault();
        dispatch(order(event.target.value))
        setCurrentPage(1);
    }

    const handleReset = (event) => {
        event.preventDefault();
        dispatch(getPokemons());
    }


    return(
        <nav className={style.nav}>
            <select onChange={filterType} className={style.btns}>
                <option value="All">types</option>
                {pokemonsTypes?.map((type) => {
                    return (
                    <option key={type.id} name={type.id} value={type.name}>
                        {type.name}
                    </option>
                    );
                })}
            </select>

            <select onChange={(event) => orderHandler(event)} className={style.btns}>
                <option value='none'>Order</option>
                <option value='A'>A-Z</option>
                <option value='D'>Z-A</option>
                <option value='W'>Weakness</option>
                <option value='S'>Strong</option>
            </select>

            <button className={style.btns}>
                <Link to={'/create'} className={style.links}>Create pokemon</Link>
            </button>
            <button className={style.btns} onClick={handleReset}>Reset</button>
            <SearchBar setCurrentPage={setCurrentPage}/>
        </nav>
    )
}

export default NavBar;