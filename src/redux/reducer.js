import { CLEAR_DETAILS, ORDER, FILTER, GET_TYPES, SEARCH_POKEMON, GET_POKEMONID, GET_POKEMONS,} from "./DataTypes.js";

const initialState = {
  pokemons: [],
  copiaPokemons: [],
  types: [],
  details: {},
  pokemonfuerte:[],
  resultados:false,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        copiaPokemons: action.payload,
        resultados:false, 
      };
    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    case GET_POKEMONID:
      return {
        ...state,
        details: action.payload,
        resultados:false
      };
    case SEARCH_POKEMON:
      return {
        ...state,
        pokemons: action.payload,
        resultados:true
      };

    case CLEAR_DETAILS:
      return {
        ...state,
        details: {},
      };

      case ORDER:
    let aux2= state.pokemons;
    if (action.payload === "A-Z") return {...state, pokemons: aux2.sort((a,b)=> a.name>b.name?1:-1),resultados:false}
    if (action.payload === "Z-A")return { ...state, pokemons: aux2.sort((a,b)=> a.name<b.name?1:-1),resultados:false}   
    if (action.payload === "STR")return { ...state, pokemons:aux2.sort((a,b)=> a.attack<b.attack?1:-1),resultados:false}
    if (action.payload === "STR-")return { ...state, pokemons:aux2.sort((a,b)=> a.attack>b.attack?1:-1),resultados:false}; 
    return { ...state, pokemons:aux2, resultados:false}   
 
    case FILTER:
      let auxx=state.copiaPokemons;
      if (action.payload === "Created") {
        let filterByOrigin = auxx.filter((e) => {
          return typeof e.id === "string";
        });
        return {
          ...state,
          pokemons: filterByOrigin, resultados:true
        };
      }
      if (action.payload === "Existing") {
        let filterByOrigin = auxx.filter((e) => {
          return typeof e.id === "number";
        });
        return {
          ...state,
          pokemons: filterByOrigin, resultados:true
        };
      }
      if (action.payload === "All") 
        return {
          ...state,
          pokemons: auxx, resultados:true
       
      }
      return {
        ...state,
        pokemons: auxx.filter((e) => e.types.includes(action.payload)),
       resultados:true
      };
     
    default:
      return { ...state, resultados:false };
  }
}
