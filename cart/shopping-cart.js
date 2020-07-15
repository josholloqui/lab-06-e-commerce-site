import cartData from '../data/cart.js';
import pokemonData from '../data/pokemon.js';
import { findById, calcOrderTotal } from '../common/utils.js';
import renderRows from './render-line-items.js';

const tableBody = document.querySelector('#insert-rows');
const orderTotalInput = document.querySelector('#order-total');

for (let i = 0; i < cartData.length; i++) {
    const rowItem = cartData[i];
    const pokemon = findById(pokemonData, rowItem.id);
    const dom = renderRows(rowItem, pokemon);

    tableBody.append(dom);
}

const orderTotal = calcOrderTotal(cartData, pokemonData);
orderTotalInput.textContent = `$${orderTotal}.00`;