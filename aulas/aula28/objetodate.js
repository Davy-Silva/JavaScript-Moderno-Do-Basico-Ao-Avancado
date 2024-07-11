// const data = new Date(0) 01/01/1970 Timestamp unix ou Época unix
const tresHoras = 60 * 60 * 3 * 1000 // Três horas calculada em Milesegundos
const umDia = 60 * 60 * 24 * 1000
const data = new Date(0 + tresHoras) // Horario diferente faz dar 1969, assim fica no horario "real"
console.log(data.toString())

const data2 = new Date(2020, 3, 20, 15, 14, 27, 500) // Ano, Mês, Dia, Hora, Minuto, Segundo, Milesemosegundos
console.log(data2)
