import pokemonData from '../data/pokemon.js';
import cartData from '../data/cart.js';
import { findById, calcLineItem, calcOrderTotal } from '../common/utils.js';

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