import axios from "axios";
import { FILTER, GET_DETAIL, GET_POKEMONS, ORDER, CLEAN_DETAIL } from "./actions_types";

export const getPokemons = () => {
    return async function (dispatch) {
        const {data} = await axios.get('http://localhost:3001/pokemons');
        dispatch({ type: GET_POKEMONS, payload: data });
    };
};

export const getDetail = (id) => {
    return async function (dispatch) {
        const { data } = await axios.get(`http://localhost:3001/pokemons/${id}`);
        dispatch({ type: GET_DETAIL, payload: data });
    };
};

export const filter = (type) => {
    return { type: FILTER, payload: type };
};

export const order = (order) => {
    return { type: ORDER, payload: order };
}

export const cleanDetail = () => {
    return { type: CLEAN_DETAIL }
}