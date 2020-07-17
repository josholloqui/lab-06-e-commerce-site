import pokemonData from '../data/pokemon.js';
import renderPokemon from './render.pokemon.js';
import { POKEMON } from '../common/constants.js';

let pokeProducts = JSON.parse(localStorage.getItem(POKEMON));

if (!pokemon) {
    localStorage.setItem(POKEMON, JSON.stringify(pokemonData));

    pokeProducts = JSON.parse(localStorage.getItem(POKEMON));
}