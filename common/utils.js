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