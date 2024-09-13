const inputTarefa = document.querySelector( '#input-new-tarefa' )
const buttonAddTarefa = document.querySelector( '#button-add-tarefa' )
const tarefas = document.querySelector( '#tarefas' )

// Detecta o click e retorna função
document.addEventListener( 'click', function( event )
{
    const click = event.target

    if( click.classList.contains( 'button' )) return criaTarefa( inputTarefa.value )
    if( click.classList.contains( 'apagar' )) return apagaTarefa( click )
            
})

// Detecta a tecla pressionada e retorna função
inputTarefa.addEventListener( 'keypress', function( event )
{
    const tecla = event.key

    if( tecla === 'Enter' ) return criaTarefa( inputTarefa.value )
})


// verifica e cria a tarefa, eexecuta o limpa input e executa a função para criar o botão ao lado
function criaTarefa( textTarefa )
{
    if( textTarefa )
    {
        const li = criaLi()
        const p = criaP()
        p.innerHTML = textTarefa
        tarefas.appendChild( li )
        li.appendChild(p)
        
        limpaInput()
        criaButtonApagar( li )
        salvarTarefas() // Salva nodeList
    }
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

function apagaTarefa( click )
{
    click.parentElement.remove()
    salvarTarefas()
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

function salvarTarefas()
{
    const liTarefas = tarefas.querySelectorAll( 'li' )
    const listaDeTarefas = []

    for( let tarefa of liTarefas )
    {
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace( 'apagar', '' ).trim()
        listaDeTarefas.push( tarefaTexto )
    }

    const tarefasJSON = JSON.stringify( listaDeTarefas )
    localStorage.setItem( 'tarefas', tarefasJSON )
}

function adicionaTarefasSalvas()
{
    const tarefas = localStorage.getItem( 'tarefas' )
    const listaDeTarefas = JSON.parse( tarefas )

    for( let tarefa of listaDeTarefas )
    {
        criaTarefa( tarefa )
    }

    console.log( tarefas )
}
adicionaTarefasSalvas()
