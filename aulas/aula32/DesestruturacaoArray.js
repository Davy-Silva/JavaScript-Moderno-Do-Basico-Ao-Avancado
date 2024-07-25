
let a = "A" // B
let b = "B" // C
let c = "C" // A

let letras = [b, c, a]; // Cria o array 'numero' com os valores de 'b', 'c' e 'a' respectivamente
[a, b, c] = letras // Desestruturação: atribui os valores do array 'numero' a 'a', 'b' e 'c'

console.log(a, b, c) // Exibe os valores desestruturados de 'a', 'b' e 'c'


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const [primeiro, segundo, ...resto] = numeros // Como pegar o resto: ...nomeVariavelResto

console.log(resto)

const numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const [um, , tres, , cinco] = numeros1 // Tem como usar espaços vazios para pular valores

//                     0          1         2
//                  0  1  2    0  1  2   0  1  2
const numeros2 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ] // Array dentro de Array
const [list1, list2, list3] = numeros2 // Facilitando com Desestruturação

console.log(numeros2[1][2]) // [Index do Array][Index do Número]
console.log(list2[2]) // Facilitando
