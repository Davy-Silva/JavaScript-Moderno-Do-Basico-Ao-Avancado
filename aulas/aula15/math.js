let num1 = 9.534534
let num2 = Math.floor(num1) // Arredonda para baixo
console.log(num2)

num2 = Math.ceil(num1)
console.log(num2) // Arrendonda para cima

num2 = Math.round(num1) // Arredonda para o mais proximo
console.log(num2)

console.log(Math.max(1, 500, 0, 4, 15, 6, 47, 8, 9)) // Retorna o maior número dessa sequência
console.log(Math.min(21, 34, 4, 7, 1, 84)) // Retorna o menor número dessa sequência

console.log(Math.random()) // Gera um número aleatorio entre 0 e 1
let aleatorio = Math.random() * (10 - 5) + 5 // Como fazer gerar um número aleatorio entre 10 e 5
console.log(aleatorio)

console.log(Math.PI) // Número de PI

num1 = 9
console.log(num1 ** (1/2)) // Calculo para descobrir a raiz quadrada

console.log(100 / 0) // Quando um número é MUITO grande o JS retorna Infinity