const verdadeira = true

// Let tem escopo de bloco {bloco}
// Var só tem escopo de funcão

let nome = "Davy" // Criando
var nome2 = "Davy"

if(verdadeira)
{
    let nome = "Teles" // Criando
    var nome2 = "Teles" // Redeclarando
    console.log(nome, nome2)
}

console.log(nome, nome2)

function falaOi()
{
    let nome = "Rihana" // Criando
    var nome2 = "Rihana" // Criando
    console.log(nome, nome2)
}

falaOi()

// Se usar var antes de declarar o JS eleva ela para o topo(Roastin), e retorna Undefined
// Se usar let antes de declarar da erro, o que todos esperam

console.log(sobrenome)
var sobrenome = "Silva"