export function findById(someArray, someId) {
    let match = null;

    for (var i = 0; i < someArray.length; i++) {
        if (someId === someArray[i].id) {
            match = someArray[i];
        }
    } 
      
    return match;
}

export function calcLineItem(quantity, price) {
    const total = quantity * price;
    return Math.round(total * 100) / 100;
}

export function calcOrderTotal(cart, pokemon) {
    let orderTotal = 0;

    for (let i = 0; i < cart.length; i++) {
        const rowItem = cart[i];
        const pokemonData = findById(pokemon, rowItem.id);
        const rowTotal = calcLineItem(rowItem.quantity, pokemonData.price);
        orderTotal += rowTotal;
    }

    return Math.round(orderTotal * 100) / 100;
}