const form = document.getElementById('formulario')
const resultado = document.getElementById('resultado')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    
    const validaNumA = document.getElementById('numA')
    const validaNumB = document.getElementById('numB')

    
    let valueNumA = Number(validaNumA.value)
    let valueNumB = Number(validaNumB.value)

    if (valueNumB > valueNumA) {
        resultado.innerHTML = `Parabéns, formulário validado!`
        resultado.style = 'color: green'
    } else {
        resultado.innerHTML = `Tente de novo, formulário invalido!`
        resultado.style = 'color: red'
    }
})