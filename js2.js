const fahrenheitSyote2 = document.querySelector('#in2');
const fahrenheitTuloste2 = document.querySelector('#fahrenheit2');
const celsiusTuloste2 = document.querySelector('#celsius2');
const muunnaButton2 = document.querySelector('#button2');





function muunna2() {
    let syote = fahrenheitSyote2.value;
    fahrenheitTuloste2.textContent = syote;

    let vastaus2 = syote * 1.8 + 32

    celsiusTuloste2.textContent = vastaus2.toFixed(0)
}


muunnaButton2.addEventListener('click', muunna2);
