/* Repetição
console.log("Linha 1")
console.log("Linha 2")
console.log("Linha 3")
console.log("Linha 4")
console.log("Linha 5")
*/

// For é uma estrutura de repetição
// i significa index
for( let i = 1; i <= 5; i++ )
{   console.log(`Linha ${i}`)   }

// Verificar se é par ou impar com for
for(let a = 0; a <= 10; a++)
{
    const par = a % 2 === 0 ? "par" : "impar"
    console.log(a, par)
}

// Exibindo todos os elementos de um Array
const frutas = ["Maçã", "Pêra", "Uva"]

for(let i = 0; i < frutas.length; i++)
{
    console.log(frutas[i])
}

