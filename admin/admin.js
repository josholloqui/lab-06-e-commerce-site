import { POKEMON } from '../common/constants.js';

const adminForm = document.getElementById('form');
const pokemonData = JSON.parse(localStorage.getItem(POKEMON));

adminForm.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(adminForm);
    const newProduct = {
        id: formData.get('id'),
        name: formData.get('name'),
        image: formData.get('image'),
        description: formData.get('description'),
        category: formData.get('category'),
        price: Number(formData.get('price')),
        cost: Number(formData.get('cost')),
    };

    const existingPokemon = pokemonData;

    existingPokemon.push(newProduct);

    const stringPokemon = JSON.stringify(existingPokemon);

    localStorage.setItem(POKEMON, stringPokemon);

    window.location = '../products/index.html';
});