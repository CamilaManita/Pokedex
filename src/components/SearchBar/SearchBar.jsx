import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getName } from '../../redux/actions';

const SearchBar = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');

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
            <form onSubmit={submit}>
                <div>
                    <input type='search' onChange={handleChange} value={search} placeholder='Busca tu pokemon...'/>
                    <input type='submit' value='Find!'/>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;