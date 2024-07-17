const data = new Date()
const diaSemana = data.getDay()
let diaSemanaTexto = retornaDiaSemana(diaSemana)

console.log(diaSemanaTexto)

// Para não usar IF
function retornaDiaSemana(data)
{
    if(data === 0) return "Domingo"
    if(data === 1) return "Segunda"
    if(data === 2) return "Terça"
    if(data === 3) return "Quarta"
    if(data === 4) return "Quinta"
    if(data === 5) return "Sexta"
    if(data === 6) return "Sabádo"
    else return "Erro!"
}


switch (diaSemana)
{
    case 0: diaSemanaTexto = "Domingo"
        break
    case 1: diaSemanaTexto = "Segunda"
        break
    case 2: diaSemanaTexto = "Terça"
        break
    case 3: diaSemanaTexto = "Quarta"
        break
    case 4: diaSemanaTexto = "Quinta"
        break
    case 5: diaSemanaTexto = "Sexta"
        break
    case 6: diaSemanaTexto = "Sábado"
        break
    default: diaSemanaTexto = "Erro!"
        break
}
// Se usar dentro de uma função, pode tirar o break (por causa do return)

console.log(diaSemanaTexto)