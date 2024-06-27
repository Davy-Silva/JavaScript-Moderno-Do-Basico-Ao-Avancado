// Criando variavel e passando para number

let number = Number(prompt('Digite um número'))

// Selecionando elementos do HTML por Id e dando valores a eles

document.getElementsByClassName('h1')[0].innerText = number
document.getElementsByClassName('h1')[1].innerText = number
document.getElementsByClassName('h1')[2].innerText = number

document.getElementById('raiz').innerText = number ** (1/2)
document.getElementById('inteiro').innerText = Number.isInteger(number)
document.getElementById('nan').innerText = Number.isNaN(number)
document.getElementById('arredondarB').innerText = Math.floor(number)
document.getElementById('arredondarC').innerText = Math.ceil(number)
document.getElementById('decimais').innerText = number.toFixed(2)