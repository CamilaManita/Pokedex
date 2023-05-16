import { FILTER, GET_POKEMONS, ORDER  } from "./actions_types";

const initialState = {
    allPokemons: [],
    pokemonDetail: {},
    pokemonsTypes: []
}

const reducer = (state = initialState, action) => {
    switch( action.type ){
        case GET_POKEMONS:
            return { ...state, allPokemons: action.payload};

        case FILTER:
            const allPokemonsFiltered = state.pokemonsTypes.filter(pokemon => pokemon.type === action.payload)
            return {
                ...state,
                allPokemons:
                    action.payload === 'pokemonsTypes'
                        ? [...state.pokemonsTypes]
                        : allPokemonsFiltered
            }

        case ORDER: 
            const allPokemonsOrderedCopy = [...state.allPokemons];
            return {
                ...state,
                allPokemons: action.payload === 'A'
                    ? allPokemonsOrderedCopy.sort((a,b) => a.name.localeCompare(b.name))
                    :allPokemonsOrderedCopy.sort((a,b) => b.name.localeCompare(a.name))
            }

        default:
            return {...state}
    }
}

export default reducer;