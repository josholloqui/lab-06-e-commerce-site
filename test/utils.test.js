import pokemon from '../data/pokemon.js';
import { findById, calcLineItem } from '../common/utils.js';

const test = QUnit.test;

QUnit.module('Utils');

test('finds pokemon by its id', assert => {
    //Arrange
    const array = pokemon;
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