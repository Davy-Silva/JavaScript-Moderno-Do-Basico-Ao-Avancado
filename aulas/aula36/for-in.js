//                0       1      2
const frutas = ['Pera', 'Maça', 'Uva']

// FOR NORMAL
for(let i = 0; i <= 2; i++)
{
    console.log(frutas[i])
}

// FOR IN -> lê os indices do array ou chaves do objeto
// Simplificação do FOR, não precisa limiar ou adicionar incremento
for(let i in frutas)
{
    console.log(frutas[i])
}

const pessoa = 
{
    nome: 'Davy',
    sobrenome: 'Silva',
    idade: 16
}

for(let i in pessoa)
{
    console.log(`${i}: ${pessoa[i]}`)
}
