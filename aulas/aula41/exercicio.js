// Escreva uma função qie recebe 2 números e retorne o maior valor deles.

function maiorValor ( a, b )
{
    return a > b ? a : b // Operação Ternária (If reduzido)
}

// OU

const maiorValor2 = ( a , b ) => a > b ? a : b // Arrow Function (Função reduzida)

console.log( maiorValor ( 5, 10 ) )

console.log( maiorValor2 ( 50, 100 ) )
