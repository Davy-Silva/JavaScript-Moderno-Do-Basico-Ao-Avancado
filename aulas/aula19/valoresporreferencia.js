// Dados Primitivos (imutáveis): String, Number, Boolean, Undefined, Null (Bigint, Symbol)
// Copiados

let name = "Davy"
name[2] = "D" // Não consigo alterar o index, é imutável
console.log(name[2])

let a = "A"
let b = a // Cópia
console.log(a, b)

a = "Outra coisa" // Mudar o valor de a, não altera b (Não apontam mesmo local na memoria)
console.log(a, b)

// Dados Por Referência (mutável): Array, Object, Function
// Passados por referência

let array = [5, 4, 3, 2, 1]
array[2] = 1
console.log(array) // Consigo alterar o index, é Mutável

a = [1, 2, 3]
b = a // Referência de a, mesmo valor
// b = [...a] <- Operador par cópiar forçado, valor de b se torna uma cópia independente, igual um dado primitivo
console.log(a, b)

a.push(4) // Alterar a também altera b (apontam o mesmo local na memoria)
console.log(a, b)