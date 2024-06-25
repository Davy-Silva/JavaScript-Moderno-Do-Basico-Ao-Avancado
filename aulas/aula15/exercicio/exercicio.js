let number = prompt('Digite um número')
number = Number(number)

document.body.innerHTML = `<h1>Seu número é: <strong>${number}</strong></h1> <hr>`
document.body.innerHTML += `Raiz quadrada: <strong>${number ** (1/2)}</strong><hr>`
document.body.innerHTML += `<strong>${number}</strong> é inteiro? <strong>${Number.isInteger(number)}</strong><hr>`
document.body.innerHTML += `<strong>${number}</strong> é NaN? <strong>${Number.isNaN(number)}</strong><hr>`
document.body.innerHTML += `Arredondando para baixo: <strong>${Math.floor(number)}</strong><hr>`
document.body.innerHTML += `Arredondando para cima: <strong>${Math.ceil(number)}</strong><hr>`
document.body.innerHTML += `Com duas casas decimais: <strong>${number.toFixed(2)}</strong><hr>`