import pokemonData from '../data/pokemon.js';
import cartData from '../data/cart.js';
import { findById, calcLineItem, calcOrderTotal, getCart } from '../common/utils.js';
import { CART } from '../common/constants.js';

const test = QUnit.test;

QUnit.module('Utils');

test('finds pokemon by its id', assert => {
    //Arrange
    const array = pokemonData;
    const id = 'pkn001';

    const expected = 'Charizard';
    
    //Act 
    const findPokemon = findById(array, id);

    //Expect
    assert.equal(findPokemon.name, expected);
});

test('calculates the line total', assert => {
    //Arrange
    const quantity = 10;
    const price = 112;

    const expected = 1120;
    
    //Act 
    const total = calcLineItem(quantity, price);

    //Expect
    assert.equal(total, expected);
});

test('calculates order total', (assert) => {
    // arrange
    const expected = 1761516;

    // act
    const orderTotal = calcOrderTotal(cartData, pokemonData);

    // assert
    assert.equal(orderTotal, expected);
});

test('function will be able to tells us a cart exist even if its null', (assert) => {
    localStorage.removeItem(CART);
    // arrange
    const exampleCart = getCart();

    // act
    const expected = [];

    // assert
    assert.deepEqual(exampleCart, expected);
});

test('function will be able to tells us the state of the cart', (assert) => {
    // arrange
    const exampleCart = [
        { 
            id: 'finn the human',
            quantity: 1
        }, {
            id: 'jake the dog',
            quantity: 4
        }
    ];

    const stringyCart = JSON.stringify(exampleCart);
    localStorage.setItem(CART, stringyCart);

    // act
    const grabExampleCart = getCart();
    const expected = exampleCart;

    // assert
    assert.deepEqual(grabExampleCart, expected);
});