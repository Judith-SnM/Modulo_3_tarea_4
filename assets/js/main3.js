//ejercicio 3

let resultado = document.querySelector(`.resultado`)
const suma = document.getElementById(`btn-sumar`)
const resta = document.getElementById(`btn-restar`)
const valor1 = document.querySelector(`#valor1`)
const valor2 = document.querySelector(`#valor2`)

suma.addEventListener(`click`, function () {

    const num1 = parseFloat(valor1.value);
    const num2 = parseFloat(valor2.value);
    let rsuma = num1 + num2;
    resultado.textContent = rsuma;
})

resta.addEventListener(`click`, function () {

    const num1 = parseFloat(valor1.value);
    const num2 = parseFloat(valor2.value);
    let rresta = num1 - num2;
    resultado.textContent = rresta;
})
