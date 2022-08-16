import axios from "axios";
import {CLEAR_DETAILS,FILTER, GET_TYPES, SEARCH_POKEMON,ORDER, GET_POKEMONID, GET_POKEMONS} from "./DataTypes.js";

export function getAllPokemons() {
  return function (dispatch) {
  return axios(`https://back-pokeapi.herokuapp.com/pokemons`)
  .then(response =>  dispatch({type: GET_POKEMONS, payload: response.data,}))
  .catch(error=> console.log(error))
  };
}

export function getTypes() {
  return async function (dispatch) {
    try {
      const res = await axios(`https://back-pokeapi.herokuapp.com/types`);
      return dispatch({ type: GET_TYPES, payload: res.data,});
    } catch (error) {console.log(error); }};
}

export function searchpoke(name) {
  return async function (dispatch) {
    try {
      const res = await axios(`https://back-pokeapi.herokuapp.com/pokemons?name=${name}`);
      return dispatch({ type: SEARCH_POKEMON, payload: res.data});
    } catch (error) {console.log(error);}};
}

export function DetailPoke(id) {
  return async function (dispatch) {
    try {
      const res = await axios(`https://back-pokeapi.herokuapp.com/pokemons/${id}`);
      return dispatch({type: GET_POKEMONID, payload: res.data,});
    } catch (error) {console.log(error);}};
}

export function crearPoke(input) {
  return async function () {
    try {
      const res = await axios.post(`https://back-pokeapi.herokuapp.com/pokemons`, input);
      return res.data;
    } catch (error) {console.log(error);} };
}

export function clearDetails(payload) {
  return {type: CLEAR_DETAILS, payload};
}
export function OrderPoke(payload) {
  return {type: ORDER, payload };
}
export function FilterPoke(payload) {
  return {type: FILTER, payload };
}

