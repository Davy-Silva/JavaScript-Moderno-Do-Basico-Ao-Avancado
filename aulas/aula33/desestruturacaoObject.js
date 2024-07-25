const pessoa = 
{
    nome: "Davy",
    sobreNome: "Silva",
    idade: 16,
    endereco:
    {
        rua: "Av Brasil",
        numero: 320,
    }
}

// const nome = pessoa.nome Atribuição normal
const { nome = "Valor Padrão", sobreNome} = pessoa // Atribuição via Desestruturação
//    Valor Padrão serve para quando não tiver valor

const { idade: nomeVariavelIdade } = pessoa
// Idade é a chave para criar a variavel que está depois do :

console.log(nome, sobreNome, nomeVariavelIdade)

const { endereco, endereco: { rua, numero } } = pessoa
// Pegando valor do Objeto dentro de outro Objeto

console.log(endereco, rua, numero)