import cartData from '../data/cart.js';
import pokemonData from '../data/pokemon.js';
import { findById } from '../common/utils.js';
import renderRows from './render-line-items.js';

const tableBody = document.querySelector('#insert-rows');

for (let i = 0; i < cartData.length; i++) {
    const rowItem = cartData[i];
    const pokemon = findById(pokemonData, rowItem.id);
    const dom = renderRows(rowItem, pokemon);

    tableBody.append(dom);
}