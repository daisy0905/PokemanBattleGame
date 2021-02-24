function select(userSelection) {
    Cookies.set('pkmSelection', userSelection);
    window.open('battle.html', '_self');
}

function goToHome() {
    window.open('home.html', '_self');
}

function goToLanding() {
    window.open('../index.html', '_self');
}