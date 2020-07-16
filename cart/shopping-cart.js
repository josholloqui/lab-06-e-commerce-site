import pokemonData from '../data/pokemon.js';
import { findById, calcOrderTotal, getCart, orderDetails } from '../common/utils.js';
import renderRows from './render-line-items.js';
import { CART } from '../common/constants.js';

const cart = getCart();
const tableBody = document.querySelector('#insert-rows');
const orderTotalInput = document.querySelector('#order-total');
const orderButton = document.querySelector('#confirm-order');

for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];
    const pokemon = findById(pokemonData, cartItem.id);
    const dom = renderRows(cartItem, pokemon);

    tableBody.append(dom);
}

const orderTotal = calcOrderTotal(cart, pokemonData);
orderTotalInput.textContent = `$${orderTotal}.00`;

// cart confirm button
if (cart.length === 0) {
    orderButton.disabled = true;
} else {
    orderButton.addEventListener('click', () => {
        alert(`You just completed your order of Pocket Monsters here are the details!${orderDetails()} incoming!`);
        localStorage.removeItem(CART);
        window.location = '../';
    });
}