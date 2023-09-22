
function formatMoney(value){
    value = Math.ceil(value * 100) / 100
    value = value.toFixed(2)
    return 'R$ ' + value
}

function update (){
    let conta = Number(document.getElementById('coloqueConta').value)
    let percentualGorjeta = document.getElementById('coloquePercentual').value
    let numeroDePessoas = document.getElementById('coloquePessoas').value

    let valorGorjeta = conta * (percentualGorjeta / 100)
    let valorTotal = conta + valorGorjeta
    let valorDivido = valorTotal / numeroDePessoas

    document.getElementById('percentualGorjeta').innerHTML = percentualGorjeta + ' %'
    document.getElementById('valorGorjeta').innerHTML = formatMoney(valorGorjeta)
    document.getElementById('totalComGorjeta').innerHTML = formatMoney(valorTotal)
    document.getElementById('numeroDePessoas').innerHTML = numeroDePessoas
    document.getElementById('valorIndividual').innerHTML = formatMoney(valorDivido)
}