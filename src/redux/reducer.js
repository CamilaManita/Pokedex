import {
  GET_POKEMONS,
  GET_DETAIL,
  CLEAN_DETAIL,
  GET_TYPES,
  POST_POKEMON,
  GET_NAME,
  FILTER_TYPE,
  ORDER
} from "./actions_types";

const initialState = {
  allPokemons: [],
  pokemons: [],
  pokemonDetail: {},
  pokemonsTypes: [],
  pokemonsFiltered: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return { 
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload 
      };

    case GET_DETAIL:
      return { ...state, pokemonDetail: action.payload };

    case GET_NAME:
      return { 
        ...state, 
        pokemons:[ action.payload ]
      };

    case GET_TYPES:
      return { ...state, pokemonsTypes: action.payload };

    case POST_POKEMON:
      return { ...state };



    // case FILTER_TYPE:
    //   let allPokemonsType = state.pokemonsFiltered;
    //   let typeFiltered = 
    //     action.payload  === 'all'
    //       ? allPokemonsType
    //       : allPokemonsType.filter((type) => {
    //         return type.pokemonsTypes.some((d) => d.name === action.payload);
    //       });
    //   return {
    //     ...state,
    //     pokemons: typeFiltered
    //   }

    case ORDER:
      if (action.payload === 'A') {
        state.allPokemons.sort(function (a,b) {
          if (a.name > b.name) {
            return 1
          }
          if (b.name > a.name) {
            return -1
          }
          return 0;
        });
      }

      if (action.payload === 'D') {
        state.allPokemons.sort(function (a, b) {
          if (a.name > b.name) {
            return -1
          }
          if (b.name > a.name) {
            return 1
          }
        });
      }

      if (action.payload === 'W') { //W de Weak = Debil
        state.allPokemons.sort(function (a,b) {
          if (a.attack > b.attack) {
            return 1
          }
          if (b.attack > a.attack) {
            return -1
          }
          return 0
        });
      }    
      
      if (action.payload === 'S') { //S de Strong = fuerte
        state.allPokemons.sort(function (a,b) {
          if (a.attack > b.attack) {
            return -1
          }
          if (b.attack > a.attack) {
            return 1;
          }
        });
      }

      if (action.payload === 'none') {
      }
      return {
        ...state,
        allPokemons: state.allPokemons
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
