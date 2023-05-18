import axios from "axios";
import { FILTER, GET_DETAIL, GET_POKEMONS, ORDER, CLEAN_DETAIL, GET_TYPES, POST_POKEMON, GET_NAME } from "./actions_types";

export const getPokemons = () => {
    return async function (dispatch) {
        const { data } = await axios.get('http://localhost:3001/pokemons');
        dispatch({ type: GET_POKEMONS, payload: data });
    };
};

export const getDetail = (id) => {
    return async function (dispatch) {
        const { data } = await axios.get(`http://localhost:3001/pokemons/${id}`);
        dispatch({ type: GET_DETAIL, payload: data });
    };
};

export const getName = (name) => {
    return async function (dispatch) {
        const { data } = await axios.get(`http://localhost:3001/pokemons/${name}`);
        dispatch({ type: GET_NAME, payload: data })
    }
}

export const getTypes = () => {
    return async function (dispatch) {
        const { data } = await axios.get(`http://localhost:3001/types`);
        dispatch({ type: GET_TYPES, payload: data })
    }
}

export const postPokemon = (newPokemon) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`http://localhost:3001/pokemons`, newPokemon);
            return dispatch({ type: POST_POKEMON, payload: data });
        } catch (error) {
            return error.message;
        }
    }
}

export const filter = (type) => {
    return { type: FILTER, payload: type };
};

export const order = (order) => {
    return { type: ORDER, payload: order };
}

export const cleanDetail = () => {
    return { type: CLEAN_DETAIL }
}