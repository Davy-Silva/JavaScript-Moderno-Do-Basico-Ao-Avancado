let num1 = 15
let num2 = 2.5355

console.log(num1.toString() + num2) // CONCATENANDO NUMBER
console.log(typeof num1) // MOSTRA QUAL É O TIPO DE DADO
console.log(num1.toString(2)) // REPRESENTAÇÃO BINÁRIA
console.log(num2.toFixed(2)) // QUANTAS CASAS DECIMAIS MOSTRAR E ARREDONDAR

// ALTERAR NUMBER PARA STRING --> num1 = num1.toString()

console.log(Number.isInteger(num1)) // RESPONDE SE É INTEIRO OU NÃO (BOOLEAN)

let temp = num1 * 'ola'
console.log(Number.isNaN(temp)) // RESPONDE SE A CONTA É VALIDA OU NÃO (BOOLEAN)

num1 = 0.7
num2 = 0.1

num1 += num2 // 0.8
num1 += num2 // 0.9
num1 += num2 // 1.0

// NÃO RESOLVE, NUM3 NÃO VIRA UM NUMBER INTEIRO ->  num1 = num1.toFixed(2)
num1 = Number(num1.toFixed(2)) // RESSOLVE, PASSA PARA INTEIRO E ARREDONDA
// TAMBÉM RESOLVE -> num1 = parseFloat(num1.toFixed(2))

console.log(num1)
console.log(Number.isInteger(num1))

// OUTRA SOLUÇÃO, MULTIPLICA POR 100 (TIRANDO AS CASAS DECIMAIS) E DEPOIS DIVIDE POR 100

num1 = 0.7
num2 = 0.1

num1 = 100*(num1 + num2) / 100
console.log(num1)

// O JAVASCRIPT TEM IMPRECICÃO COM CALCÚLOS EM VALORES PEQUENOS, NAS CASAS DÉCIMAIS.