const fahrenheitSyote = document.querySelector('input');
const fahrenheitTuloste = document.querySelector('#fahrenheit');
const celsiusTuloste = document.querySelector('#celsius');
const muunnaButton = document.querySelector('button');

function muunna() {
    let syote = fahrenheitSyote.value;
    fahrenheitTuloste.textContent = syote;


}


muunnaButton.addEventListener('click', muunna);