// const data = new Date(0) 01/01/1970 Timestamp unix ou Época unix
const tresHoras = 60 * 60 * 3 * 1000 // Três horas calculada em Milesegundos
const umDia = 60 * 60 * 24 * 1000
const data = new Date(0 + tresHoras) // Horario diferente faz dar 1969, assim fica no horario "real"
console.log(data.toString())

const data2 = new Date(2020, 3, 20, 15, 14, 27, 500) // Ano, Mês, Dia, Hora, Minuto, Segundo, Milesemosegundos
console.log(data2)

// Exibindo valores separados
console.log("Dia", data2.getDate())
console.log("Mês", data2.getMonth() + 1) // Mês em JS começa no 0
console.log("Ano", data2.getFullYear())
console.log("Hora", data2.getHours())
console.log("Min", data2.getMinutes())
console.log("Seg", data2.getSeconds())
console.log("Ms", data2.getMilliseconds())
console.log("Dia Semana", data2.getDay())

// Deixando data no padrão Br
function formataData(data)
{
    const dia = zeroAEsquerda(data.getDate())
    const mes = zeroAEsquerda(data.getMonth() + 1)
    const ano = zeroAEsquerda(data.getFullYear())
    const hora = zeroAEsquerda(data.getHours())
    const min = zeroAEsquerda(data.getMinutes())
    const seg = zeroAEsquerda(data.getSeconds())

    return `${dia}/${mes}/${ano}  ${hora}:${min}:${seg}`
}
 
// Colocando zero na esquena igual estamos acostumados no Brasil 
function zeroAEsquerda(num)
{   return num >= 10 ? num : `0${num}` }

const data3 = new Date()
const dataBrasil = formataData(data3)
console.log(dataBrasil)