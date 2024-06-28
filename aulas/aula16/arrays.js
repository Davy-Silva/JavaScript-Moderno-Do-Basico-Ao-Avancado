/*
Quais elementos posso colocar no array?
todos os tipos de dados, funções, objetos.

*/

const alunos = ['Eduardo', 'Maria', 'João ']

console.log(alunos)
console.log(alunos[1]) // Array tem index por elemento

alunos[0] = 'Luiz' // Mudando valor de um elemento do array
console.log(alunos)

console.log(alunos.length) // Descobrindo valor do array (Começa do 1, não do 0)

alunos[alunos.length] = 'Davy' // 1 metodo de adicionar um elemento no final
alunos.push('Rihana') // 2 metodo de adicionar
alunos.push('Jubileu')
console.log(alunos)

alunos.pop() // Remove o ultimo elemento
console.log(alunos)

alunos.unshift('Luiza') // Adicionando elemento no index 0, movendo todos 1 index pra frente
console.log(alunos)

alunos.shift() // Remove o primeiro elemento
console.log(alunos)

delete alunos[1] // Deleta elemento e deixa o index dele vazio
console.log(alunos[1])
console.log(alunos)

console.log(alunos.slice(2, 5)) // Limitando começo e final

console.log(typeof alunos) // Saída = Object porque o array no JS o array realmente é um object

console.log(alunos instanceof Array) // Ver se alunos é uma instancia de Array (resposta boolean)

