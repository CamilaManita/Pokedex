import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getName } from '../../redux/actions';
import style from './SearchBar.module.css';

const SearchBar = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const [error, setError] = useState(false);


    const handleChange = (event) => {
        event.preventDefault();
        setSearch(event.target.value);
    }

    const submit = (event) => {
        event.preventDefault();
        if (search.length > 0) {
            dispatch(getName(search.toLocaleLowerCase()));
            setSearch('');
        }
    }

    return (
        <div>
            <form onSubmit={submit} >
                <div className={style.container}>
                    <input type='search' onChange={handleChange} value={search} placeholder='Search your pokemon...' className={style.inputs}/>
                    <button>Find!</button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;