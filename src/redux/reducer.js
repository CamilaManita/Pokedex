import {
  FILTER,
  GET_POKEMONS,
  ORDER,
  GET_DETAIL,
  CLEAN_DETAIL,
  GET_TYPES,
  POST_POKEMON,
  GET_NAME,
} from "./actions_types";

const initialState = {
  allPokemons: [],
  pokemonDetail: {},
  pokemonsTypes: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return { ...state, allPokemons: action.payload };

    case GET_DETAIL:
      return { ...state, pokemonDetail: action.payload };

    case GET_NAME:
      return {...state, pokemonDetail: action.payload};

    case GET_TYPES:
      return { ...state, pokemonsTypes: action.payload };

    case POST_POKEMON:
      return {...state}

    case FILTER:
      const allPokemonsFiltered = state.pokemonsTypes.filter(
        (pokemon) => pokemon.type === action.payload
      );
      return {
        ...state,
        allPokemons:
          action.payload === "pokemonsTypes"
            ? [...state.pokemonsTypes]
            : allPokemonsFiltered,
      };

    case ORDER:
      const allPokemonsOrderedCopy = [...state.allPokemons];
      return {
        ...state,
        allPokemons:
          action.payload === "A"
            ? allPokemonsOrderedCopy.sort((a, b) =>
                a.name.localeCompare(b.name)
              )
            : allPokemonsOrderedCopy.sort((a, b) =>
                b.name.localeCompare(a.name)
              ),
      };

    case CLEAN_DETAIL:
      return {
        ...state,
        pokemonDetail: {},
      };

    default:
      return { ...state };
  }
};

export default reducer;
