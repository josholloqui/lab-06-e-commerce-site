export function renderPokemon(pokemon) {
    const listElement = document.createElement('li');
    listElement.classList.add(pokemon.category);

    const titleElement = pokemon.description;
    listElement.title = titleElement;

    const headingElement = document.createElement('h3');
    headingElement.textContent = pokemon.name;
    listElement.append(headingElement);

    const imageElement = document.createElement('img');
    imageElement.src = '../assets/products/' + pokemon.image;
    imageElement.alt = pokemon.name + ' image';
    listElement.append(imageElement);

    const pElement = document.createElement('p');
    pElement.classList.add('price');
    pElement.textContent = `$${pokemon.price.toFixed(2)}`;
    listElement.append(pElement);

    const buttonElement = document.createElement('button');
    buttonElement.value = pokemon.id;
    buttonElement.textContent = 'Add';
    listElement.append(buttonElement);

    return listElement;
}