import pokemon from '../data/pokemon.js';
import { findById } from '../common/utils.js';
import renderRows from '../cart/render-line-items.js';



const test = QUnit.test;

QUnit.module('Render Table Rows');

test('renders a pokemon to list', assert => {
    //Arrange
    const rowItem = {
        id: 'pkn007',
        quantity: 2
    };

    const findMew = findById(pokemon, rowItem.id);

    const expected = '<tr><td class="start">Mew<img src="../assets/products/mew.png" alt="Mew image"></td><td>2</td><td>$1000000.00</td><td class="row-total">$2000000.00</td></tr>';
    
    //Act 
    const dom = renderRows(rowItem, findMew);
    const html = dom.outerHTML;

    //Expect
    assert.equal(html, expected);
});