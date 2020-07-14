import pokemon from '../data/pokemon.js';
import { renderPokemon } from '../products/render.pokemon.js';

const listElement = document.getElementById('pokemon-list');

for (let i = 0; i < pokemon.length; i++) {
    const pocketMonsters = pokemon[i];
    const domElement = renderPokemon(pocketMonsters);

    listElement.append(domElement);
}