function mostraHora()
{
    let data = new Date()

    return data.toLocaleTimeString( 'pt-BR' )
}

// Seta os intevalos para repetir de tempo em tempo o codigo
// ( o que vai ser executado, intevalo )
const timer = setInterval( function() { console.log( mostraHora() ) }, 1000 )

// Seta onde o intervalo sai
// ( o que vai ser executado, depois de quanto tempo )
setTimeout( function() { clearInterval( timer ) }, 3000 )

setTimeout( function() { console.log( 'Hello Word' ) }, 5000 )