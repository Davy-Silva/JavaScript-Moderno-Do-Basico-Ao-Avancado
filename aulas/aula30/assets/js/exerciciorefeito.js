// Feito junto com professor do curso

/*
const h1 = document.querySelector("#h1")
const data = new Date()

function getDiaSemanaTexto(diaSemana)
{
    let diaSemanaTexto

    switch(diaSemana)
    {
        case 0: return diaSemanaTexto = "domingo"
        case 1: return diaSemanaTexto = "segunda-feira"
        case 2: return diaSemanaTexto = "terça-feira"
        case 3: return diaSemanaTexto = "quarta-feira"
        case 4: return diaSemanaTexto = "quinta-feira"
        case 5: return diaSemanaTexto = "sexta-feira"
        case 6: return diaSemanaTexto = "sábado"
    }
}

function getNomeMes(numeroMes)
{
    let nomeMes

    switch(numeroMes)
    {
        case 0: return nomeMes = "Janeiro"
        case 1: return nomeMes = "Fevereiro"
        case 2: return nomeMes = "Março"
        case 3: return nomeMes = "Abril"
        case 4: return nomeMes = "Maio"
        case 5: return nomeMes = "Junho"
        case 6: return nomeMes = "Julho"
        case 7: return nomeMes = "Agosto"
        case 8: return nomeMes = "Setembro"
        case 9: return nomeMes = "Outubro"
        case 10: return nomeMes = "Novembro"
        case 11: return nomeMes = "Dezembro"
    }
}

function criaData(data)
{
    const nomeDia = getDiaSemanaTexto(data.getDay())
    const nomeMes = getNomeMes(data.getMonth())

    return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} <br>` + 
    ` ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
}

function zeroAEsquerda(num)
{   return num >= 10 ? num : `0${num}` }

h1.innerHTML = criaData(data)
*/

// Jeito mais fácil

const h1 = document.querySelector("#h1")
const data = new Date()

h1.innerHTML = data.toLocaleDateString("pt-BR", { dateStyle: "full", timeStyle: "short" })