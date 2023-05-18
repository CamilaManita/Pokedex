import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { cleanDetail, getName } from '../../redux/actions';

const SearchBar = () => {

    // const dispatch = useDispatch();
    const [name, setName] = useState('');

    // useEffect(() => {
    //     dispatch(getName(name));
    //     return () => dispatch(cleanDetail());
    // }, [name, dispatch])

    const handleChange = (event) => {
        setName(event.target.value)
        // const property = event.target.name;
        // const value = event.target.value;

        // setName({ ...name, [property]: value});
    }

    return (
        <div>
            <input type='search' onChange={handleChange} value={name}/>
            <button onClick={() => {getName(name); setName('')}}>Buscar</button>
        </div>
    )
}

export default SearchBar;