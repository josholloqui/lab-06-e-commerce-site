import pokemonData from '../data/pokemon.js';
import { findById, calcOrderTotal, getCart } from '../common/utils.js';
import renderRows from './render-line-items.js';

const cart = getCart();

const tableBody = document.querySelector('#insert-rows');
const orderTotalInput = document.querySelector('#order-total');

for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];
    const pokemon = findById(pokemonData, cartItem.id);
    const dom = renderRows(cartItem, pokemon);

    tableBody.append(dom);
}

const orderTotal = calcOrderTotal(cart, pokemonData);
orderTotalInput.textContent = `$${orderTotal}.00`;