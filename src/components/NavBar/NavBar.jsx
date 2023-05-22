import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {order, filter} from '../../redux/actions';

const NavBar = () => {

    const dispatch =  useDispatch();
    const {pokemonsTypes} = useSelector(state => state);

    const orderHandler = (event) => {
        event.preventDefault();
        dispatch(order(event.target.value))
    }

    const filterType = (event) => {
        const type = event.target.value;
        dispatch(filter(type));
    };

    return(
        <nav className={style.nav}>
            <select onChange={(event) => orderHandler(event)} className={style.btns}>
                <option value='none'>Order</option>
                <option value='A'>A-Z</option>
                <option value='D'>Z-A</option>
                <option value='W'>Weakness</option>
                <option value='S'>Strong</option>
            </select>

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

            <button className={style.btns}>
                <Link to={'/create'} className={style.links}>Create pokemon</Link>
            </button>
            <SearchBar />
        </nav>
    )
}

export default NavBar;