import pokemon from '../data/pokemon.js';
import { findById } from '../common/utils.js';

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