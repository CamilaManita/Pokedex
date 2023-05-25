import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getName } from '../../redux/actions';
import style from './SearchBar.module.css';

const SearchBar = ({setCurrentPage}) => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    const handleChange = (event) => {
        event.preventDefault();
        setSearch(event.target.value);
    }

    const submit = async (event) => {
        event.preventDefault();
        if (search.length > 0) {
          try {
            await dispatch(getName(search.toLowerCase()));
            setSearch('');
            setCurrentPage(1);
          } catch (error) {
            alert('Pokemons not found');
          }
        }
      };
      

    return (
        <div>
            <form onSubmit={submit} >
                <div className={style.container}>
                    <input type='search' onChange={handleChange} value={search} placeholder='Search your pokemon...' className={style.inputs}/>
                    <button disabled={isLoading}>Find!</button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;