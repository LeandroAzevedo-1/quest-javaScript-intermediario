const input = document.querySelectorAll('input')
const textarea = document.querySelector('textarea')
const btnEnviar = document.querySelector('#btn-enviar')
const mensagemDeValidacao = document.querySelectorAll('.validacao')

input[0].addEventListener('input', (element) =>{
    const valueInput = element.target.value
    if(valueInput == ""){
        mensagemDeValidacao[0].style.opacity = "1"
        element.target.style.border = "2px solid rgba(245, 46, 46, 1)"
    } else {
        mensagemDeValidacao[0].style.opacity = "0"
        element.target.style.border = "2px solid rgba(0, 194, 43, 1)"
    }
})
input[1].addEventListener('input', (element)=> {
    const valueInput = element.target.value
    if(valueInput == ""){
        mensagemDeValidacao[1].style.opacity = "1"
        element.target.style.border = "2px solid rgba(245, 46, 46, 1)"
    } else {
        mensagemDeValidacao[1].style.opacity = "0"
        element.target.style.border = "2px solid rgba(0, 194, 43, 1)"
    }
})
input[2].addEventListener('input', (element)=> {
    const valueInput = element.target.value
    if(valueInput == ""){
        mensagemDeValidacao[2].style.opacity = "1"
        element.target.style.border = "2px solid rgba(245, 46, 46, 1)"
    } else {
        mensagemDeValidacao[2].style.opacity = "0"
        element.target.style.border = "2px solid rgba(0, 194, 43, 1)"
    }
})
textarea.addEventListener('input', (element)=> {
    const valueInput = element.target.value
    if(valueInput == ""){
        mensagemDeValidacao[3].style.opacity = "1"
        element.target.style.border = "2px solid rgba(245, 46, 46, 1)"
    } else {
        mensagemDeValidacao[3].style.opacity = "0"
        element.target.style.border = "2px solid rgba(0, 194, 43, 1)"
    }
})

btnEnviar.addEventListener("click", (event) => {
    event.preventDefault()

    if (valueInput[0].value === "") {
        mensagemDeValidacao[0].style.opacity = "1"
        valueInput[0].style.border = "2px solid rgba(245, 46, 46, 1)"
    }
    if (valueInput[1].value === "") {
        mensagemDeValidacao[1].style.opacity = "1"
        valueInput[1].style.border = "2px solid rgba(245, 46, 46, 1)"
    }
    if (valueInput[2].value === "") {
        mensagemDeValidacao[2].style.opacity = "1"
        valueInput[2].style.border = "2px solid rgba(245, 46, 46, 1)"
    }
    if (textarea.value === "") {
        mensagemDeValidacao[3].style.opacity = "1"
        valueInput[3].style.border = "2px solid rgba(245, 46, 46, 1)"
    }
})


