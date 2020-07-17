function passwordCheck(){
    let password = prompt('Enter password to access Admin');
    if (password === 'pokemonmaster') {
        window.location = '../admin/index.html';
    } else if (password !== '' && password !== null) {
        window.location = '../';
    }
}
window.onload=passwordCheck;