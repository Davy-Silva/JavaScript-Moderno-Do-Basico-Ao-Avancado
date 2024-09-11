function criaHoraDosSegundos( segundos )
{
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString( 'pt-BR', { hour12: false, timeZone: 'GMT' } )
}

console.log(criaHoraDosSegundos(10))

const buttonZerar = document.querySelector('#button-zerar')
const buttonPausar = document.querySelector('#button-pausar')
const buttonIniciar = document.querySelector('#button-iniciar')
