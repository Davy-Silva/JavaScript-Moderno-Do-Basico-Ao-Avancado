let i = 0

while( i <= 10 ) // Checa a condição e depois executa o laço. (While = Enquanto)
{
    console.log(i)
    i++ // Se não usar incremento cria um laço infinito. i nunca chega a 10.
}

console.log('-------------------------------')

let i2 = 0
const nome = 'Davy'

while( i2 < nome.length )
{
    console.log(nome[i2])
    i2++
}

console.log('-------------------------------')

// Gera número aleatório
function random(min, max)
{
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}

const min = 1
const max = 50
let rand = random(min, max)

while ( rand !== 10 )
{
    rand = random(min, max)
    console.log(rand)
}

console.log('-------------------------------')

do // Executa e depois checa o codigo (Do While = Faça depois cheque)
{
    rand = random(min, max)
    console.log(rand)
} while (rand !== 10)
