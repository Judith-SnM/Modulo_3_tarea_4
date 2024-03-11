const color1=document.getElementById("btn-1")
const color2=document.getElementById("btn-2")
const color3=document.getElementById("btn-3")
const color4=document.getElementById("btn-4")
const color5=document.getElementById("btn-5")
const color6=document.getElementById("btn-6")
let resultado = document.querySelector("#caja")

color1.addEventListener(`click`,  function () {
    resultado.style.backgroundColor = '#e53e3e'
})
color2.addEventListener(`click`,  function () {
    resultado.style.backgroundColor ='#dd6b20';
})
color3.addEventListener(`click`,  function () {
    resultado.style.backgroundColor ='#faf089';
})
color4.addEventListener(`click`,  function () {
    resultado.style.backgroundColor ='#48bb78';
})
color5.addEventListener(`click`,  function () {
    resultado.style.backgroundColor ='#81e6d9';
})
color6.addEventListener(`click`,  function () {
    resultado.style.backgroundColor ='#d53f8c';
})

