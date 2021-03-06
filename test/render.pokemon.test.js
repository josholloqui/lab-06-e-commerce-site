import renderPokemon from '../products/render.pokemon.js';

const test = QUnit.test;

QUnit.module('Render Pokemon');

test('renders a pokemon to list', assert => {
    //Arrange
    const slowking = {
        id: 'pkn005',
        name: 'Slowking',
        image: 'slowking.png',
        description: 'Slowking constantly comes up with new ideas that would change the world, but sadly as soon as it hits upon a new idea, it forgets it.',
        category: 'water-psychic',
        price: 999,
        cost: 749.25
    };

    const expected = '<li class="water-psychic" title="Slowking constantly comes up with new ideas that would change the world, but sadly as soon as it hits upon a new idea, it forgets it."><h3>Slowking</h3><img src="../assets/products/slowking.png" alt="Slowking image"><p class="price">$999.00</p><button value="pkn005">Add</button></li>';
    
    //Act 
    const dom = renderPokemon(slowking);
    const html = dom.outerHTML;

    //Expect
    assert.equal(html, expected);
});
