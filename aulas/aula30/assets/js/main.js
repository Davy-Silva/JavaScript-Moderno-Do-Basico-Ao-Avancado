const h1 = document.querySelector("#h1")
const data = new Date()
const diaSemana = diaSemanaText(data.getDay())
const dataMes = data.getDate()
const mes = mesText(data.getMonth())
const ano = data.getFullYear()
const hora = data.getHours()
const minuto = data.getMinutes()

function diaSemanaText(dia)
{
    switch(dia)
    {
        case 0: return "Domingo-feira"
        case 1: return "Segunda-feira"
        case 2: return "Terça-feira"
        case 3: return "Quarta-feira"
        case 4: return "Quinta-feira"
        case 5: return "Sexta-feira"
        case 6: return "Sábado-feira"
    }
}

function mesText(mes)
{
    switch(mes)
    {
        case 0: return "Janeiro"
        case 1: return "Fevereiro"
        case 2: return "Março"
        case 3: return "Abril"
        case 4: return "Maio"
        case 5: return "Junho"
        case 6: return "Julho"
        case 7: return "Agosto"
        case 8: return "Setembro"
        case 9: return "Outubro"
        case 10: return "Novembro"
        case 11: return "Dezembro"
    }
}

montaMsg(diaSemana, dataMes, mes, ano, hora, minuto)

function montaMsg(diaSemana, dataMes, mes, ano, hora, minuto)
{
    const msg = `${diaSemana}, ${dataMes} de ${mes} de ${ano} ${hora}:${minuto}`
    enviaMsg(msg)
}

function enviaMsg(msg)
{
    h1.innerHTML = ""
    h1.innerHTML = msg
}