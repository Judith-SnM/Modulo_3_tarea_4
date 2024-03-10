//ejercicio 1
let formulario = document.querySelector(`#formulario`)
const respnombre = document.querySelector(`#nombre`)
const errornombre = document.querySelector(`.errorNombre`)
const respasunto = document.querySelector(`#asunto`)
const errorasunto = document.querySelector(`.errorAsunto`)
const respmensaje = document.querySelector(`#mensaje`)
const errormensaje = document.querySelector(`.errorMensaje`)
const respuesta = document.querySelector(`.resultado`)
const regex1 = /[a-zA-Z]/gim

formulario.addEventListener("submit", (event) => {
    event.preventDefault()
    if (respnombre.value.trim() === "") {
        errornombre.textContent = ("El nombre es Requerido");
    } else {
        if (regex1.test(respnombre.value)) {
        } else {
            errornombre.textContent = ("error con la informacion entregada, solo texto ");
        }
    }
    if (respasunto.value.trim() === "") {
        errorasunto.textContent = ("El asunto es Requerido");
    } else {
        if (regex1.test(respasunto.value)) {
        } else {
            errorasunto.textContent = ("error con la informacion entregada, solo texto ");
        }
    }
    if (respmensaje.value.trim() === "") {
        errormensaje.textContent = ("El mensaje es Requerido");
    } else {
        if (regex1.test(respmensaje.value)) {
        } else {
            errormensaje.textContent = ("error con la informacion entregada, solo texto ");
        }
    }

    if (regex1.test(respnombre.value) || regex1.test(respasunto.value) || regex1.test(respmensaje.value)) {
        respuesta.textContent = ("Mensaje enviado con exito");
    }
})
