let num1 = 15
let num2 = 2.5355

console.log(num1.toString() + num2) // CONCATENANDO NUMBER
console.log(typeof num1) // MOSTRA QUAL É O TIPO DE DADO
console.log(num1.toString(2)) // REPRESENTAÇÃO BINÁRIA
console.log(num2.toFixed(2)) // QUANTAS CASAS DECIMAIS MOSTRAR E ARREDONDAR

// ALTERAR NUMBER PARA STRING --> num1 = num1.toString()

console.log(Number.isInteger(num1)) // RESPONDE SE É INTEIRO OU NÃO (BOOLEAN)

let temp = num1 * 'ola'
console.log(Number.isNaN(temp)) // RESPONDE SE A CONTA É FALSA OU NÃO (BOOLEAN)

let num3 = 0.7
let num4 = 0.1

num3 += num4
num3 += num4
num3 += num4
num3 = num3.toFixed(2)
console.log(num3)