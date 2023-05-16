import axios from "axios";
import { FILTER, GET_POKEMON, GET_POKEMONS, ORDER } from "./actions_types";

export const getPokemons = () => {
    return async function (dispatch) {
        const apiData = axios.get('http://localhost:3001/pokemons');
        const pokemons = apiData.data;
        dispatch({ type: GET_POKEMONS, payload: pokemons });
    };
};

export const getDetail = (id) => {
    return async function (dispatch) {
        const apiData = await axios.get(`http://localhost:3001/pokemons/${id}`);
        const pokemon = apiData.data;
        dispatch({ type: GET_POKEMON, payload: pokemon });
    };
};

export const filter = (type) => {
    return { type: FILTER, payload: type };
};

export const order = (order) => {
    return { type: ORDER, payload: order };
}