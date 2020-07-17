import pokemonData from '../data/pokemon.js';
import renderPokemon from './render.pokemon.js';
import { POKEMON } from '../common/constants.js';

let pokeProducts = JSON.parse(localStorage.getItem(POKEMON));

if (!pokeProducts) {
    localStorage.setItem(POKEMON, JSON.stringify(pokemonData));

    pokeProducts = JSON.parse(localStorage.getItem(POKEMON));
}

const listElement = document.getElementById('pokemon-list');

for (let i = 0; i < pokeProducts.length; i++) {
    const pocketMonsters = pokeProducts[i];
    const domElement = renderPokemon(pocketMonsters);

    listElement.append(domElement);
}