function relogio()
{
    let timer
    let segundos = 0
    const relogio = document.querySelector('#relogio')
    const buttonZerar = document.querySelector('#button-zerar')
    const buttonPausar = document.querySelector('#button-pausar')
    const buttonIniciar = document.querySelector('#button-iniciar')

    function criaHoraDosSegundos( segundos )
    {
        const data = new Date(segundos * 1000)
        return data.toLocaleTimeString( 'pt-BR', { hour12: false, timeZone: 'GMT' } )
    }

    function iniciaRelogio()
    {
        timer = setInterval( function()
        {
            segundos++
            relogio.innerHTML = criaHoraDosSegundos( segundos )
        }, 1000 )
    }

    console.log(criaHoraDosSegundos(10))

    buttonIniciar.addEventListener( 'click', function( event )
    {
        clearInterval( timer )
        relogio.classList.remove( 'pausado' )
        iniciaRelogio()
    })
    buttonPausar.addEventListener( 'click', function( event )
    {
        clearInterval(timer)
        relogio.classList.add( 'pausado' )
    })
    buttonZerar.addEventListener( 'click', function( event )
    {
        clearInterval(timer)
        segundos = 0
        relogio.classList.remove( 'pausado' )
        relogio.innerHTML = '00:00:00'
    })
}

relogio()
