/*
For - Geralmente usado com Iteráveis (Arrays, String)
For In - retorna o indíce ou chave (String, Array, Objetos)
For Of - retorna só o valor em si (Iteráveis, Arrays, String)
*/

//            0123
const nome = 'Davy'

// FOR
for( let i = 0; i < nome.length; i++ )
{
    console.log(nome[i])
}

console.log('------')

// FOR IN
for( let i in nome )
{
    console.log(nome[i])
}

console.log('------')

// FOR OF -> pega o valor e não a variável ou indíce
// Outra simplificação dor FOR, que também não precisa limitar nem de incremento
for( let i of nome )
{
    console.log(i)
}

// FOR OF -> não pega só um valor, pega todos os valores do Array (Não funciona com Objetos)
const nomes = ['Davy', 'Rihana']

for( let i of nomes )
{
    console.log(i)
}
