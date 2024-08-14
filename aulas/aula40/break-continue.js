// Funciona nos laços For, For Of, For In, While e Do While

const numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

for ( let numero of numeros )
{
    if ( numero === 2)
    {
        console.log( 'Pulei o Número 2' )
        continue // Pula para proxima interação
    }

    console.log( numero )
}

console.log( '----------------------------' )

for ( let numero of numeros )
{
    if ( numero === 7 )
    {
        console.log( 'Número 7 Encontrado, saindo...' )
        break // Quebra o laço, não executa o resto
    }

    console.log( numero )
}

console.log( '----------------------------' )

let numero = 0

while ( numero < numeros.length )
{

    if ( numero === 2)
    {
        console.log( 'Pulei o Número 2' )
        numero++ // Semore usar antes de continue para não criar um laço infinito
        continue // Pula para proxima interação
    }

    console.log( numero )
    
    numero++
}

do
{
    if ( numero === 7 )
    {
        console.log( 'Número 7 Encontrado, saindo...' )
        break // Quebra o laço, não executa o resto
    }

    console.log( numero )

    numero++

} while ( numero < numeros.length )
