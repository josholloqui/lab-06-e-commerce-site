export default function renderRows(rowItem, pokemon) {
    const tableRow = document.createElement('tr');

    const nameData = document.createElement('td');
    nameData.classList = 'start';
    nameData.textContent = pokemon.name;
    tableRow.append(nameData);

    const imageElement = document.createElement('img');
    imageElement.src = '../assets/products/' + pokemon.image;
    imageElement.alt = pokemon.name + ' image';
    imageElement.classList = 'poke-img';
    nameData.append(imageElement);

    const quantityData = document.createElement('td');
    quantityData.textContent = rowItem.quantity;
    tableRow.append(quantityData);

    const priceData = document.createElement('td');
    priceData.textContent = `$${pokemon.price}.00`;
    tableRow.append(priceData);

    const rowTotalData = document.createElement('td');
    rowTotalData.classList = 'row-total';
    const total = rowItem.quantity * pokemon.price;
    rowTotalData.textContent = `$${total}.00`;
    tableRow.append(rowTotalData);
    
    return tableRow;
}