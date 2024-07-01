/*  PARA NÂO FAZER ISSO
const nome1 = "Luiz"
const sobrenome1 = "Miranda"
const idade1 = 25

const nome2 = "Luiza"
const sobrenome2 = "Mirande"
const idade2 = 32
*/

const pessoa1 =
{
    nome: "Luiz",
    sobrenome: "Miranda",
    idade: 25,

    // Função dentro de Objeto é um Metodo
    falaIdade()
    { console.log(`${this.nome} tem ${this.idade} anos.`)}, // This serve para se referir ao objeto 

    incrementaIdade()
    {
        ++this.idade,
        console.log(this.idade)
    }
}

pessoa1.falaIdade()
pessoa1.incrementaIdade()