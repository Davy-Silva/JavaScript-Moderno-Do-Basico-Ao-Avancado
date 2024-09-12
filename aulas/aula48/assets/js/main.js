const inputTarefa = document.querySelector( '#input-new-tarefa' )
const buttonAddTarefa = document.querySelector( '#button-add-tarefa' )
const tarefas = document.querySelector( '#tarefas' )

buttonAddTarefa.addEventListener( 'click', function( event )
{
    const click = event.target
    
    if( click.classList.contains( 'button' )) return verificaTarefa()
    if( click.classList.contains( 'apagar' )) return apagaTarefa()

})

function verificaTarefa()
{
    const valorInput = inputTarefa.value

    if( !valorInput ) return
    criaTarefa( valorInput )
}

function criaTarefa( textTarefa )
{
    const li = criaLi()
    const p = criaP()
    p.innerHTML = textTarefa
    tarefas.appendChild( li )
    li.appendChild(p)

    limpaInput()
    criaButtonApagar( p )
}

function criaButtonApagar( li )
{
    const bottonApagar = criaButton()
    bottonApagar.innerText = 'apagar'
    bottonApagar.setAttribute( 'class', 'apagar' )
    li.appendChild( bottonApagar )
}


function limpaInput()
{
    inputTarefa.value = ''
    inputTarefa.focus()
}

function apagaTarefa()
{

}

function criaLi()
{
    const li = document.createElement( 'li' )
    return li
}

function criaP()
{
    const p = document.createElement( 'p' )
    return p
}

function criaButton()
{
    const button = document.createElement( 'button' )
    return button
}

inputTarefa.addEventListener( 'keypress', function(e)
{
    if( e.key === 'Enter' ) verificaTarefa()
})
