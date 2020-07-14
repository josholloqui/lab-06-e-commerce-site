export function findById(someArray, someId) {
    let match = null;

    for (var i = 0; i < someArray.length; i++) {
        if (someId === someArray[i].id) {
            match = someArray[i];
        }
    } 
      
    return match;
}