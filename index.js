const fahrenheitSyote = document.querySelector('input');
const fahrenheitTuloste = document.querySelector('#fahrenheit');
const celsiusTuloste = document.querySelector('#celsius');
const muunnaButton = document.querySelector('button');





function muunna() {
    let syote = fahrenheitSyote.value;
    fahrenheitTuloste.textContent = syote;

    let vastaus = 5 * (syote - 32) / 9

    celsiusTuloste.textContent = vastaus.toFixed(0)
}


muunnaButton.addEventListener('click', muunna);







