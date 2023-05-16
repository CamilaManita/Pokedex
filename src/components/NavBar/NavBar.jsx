// import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css';

const Nav = () => {
    return(
        <nav className={style.mainContainer}>
            <button>
                <Link to={'/home'}>Home</Link>
            </button>
            <button>
                <Link to={'/create'}>Form</Link>
            </button>
            {/* <SearchBar  onSearch={onSearch} /> */}
        </nav>
    )
}

export default Nav;