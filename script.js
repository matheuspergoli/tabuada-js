var resultado = window.document.querySelector('#resultado')
var btnTabuada = window.document.querySelector('input[type="button"]')

btnTabuada.addEventListener('click', gerar)

function gerar() {
    var inputTabuada = Number(window.document.querySelector('#input-tabuada').value)
    resultado.style.display = 'block'
    resultado.innerHTML = ''
    for(var contador = 0; contador <= 10; contador++) {
        resultado.innerHTML += `<p>${inputTabuada} x ${contador} = ${inputTabuada * contador}</p>`
    }
}