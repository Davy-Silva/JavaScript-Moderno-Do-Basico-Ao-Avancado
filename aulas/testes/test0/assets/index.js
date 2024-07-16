//  Form
const form = document.querySelector("form")

// Capturando eventos
form.addEventListener("submit", capturaEvento)

function capturaEvento(evento)
{
    evento.preventDefault()

    const raiz = Number(form.querySelector("#raiz").value)
    const num1Calculo = Number(form.querySelector("#num1Calculo").value)
    const num2Calculo = Number(form.querySelector("#num2Calculo").value)
    
    verificador(raiz, num1Calculo, num2Calculo)
}

// Verificando se os valores são coerentes
function verificador(raiz, num1, num2)
{
    if(raiz === 0)
    {    }
    else if(!isNaN(raiz))
    {   raizQuadrada(raiz) }
    else
    {   enviaMsg("Número colocado para descobrir a raiz não identificado!") }

    if(isNaN(num1))
    {   }
    else if(isNaN(num2))
    {   enviaMsg("Número 2 não identificado!")}
    else if(num1 === 0)
    {   }
    else if(num1 === 0)
    {   }
    else
    {   calculo(num1, num2) }
    
}

// Fazendo o caluculo com valores verificados
function calculo(num1, num2)
{
    const simbolo = form.querySelector("#simbolo").value

    if(simbolo === "adicao")
    {   enviaMsg(`${num1} + ${num2} = ${num1 + num2}`) }
    else if(simbolo === "subtracao")
    {   enviaMsg(`${num1} - ${num2} = ${num1 - num2}`) }
    else if(simbolo === "multiplicacao")
    {   enviaMsg(`${num1} x ${num2} = ${num1 * num2}`) }
    else if(simbolo === "divisao")
    {   enviaMsg(`${num1} ÷ ${num2} = ${num1 / num2}`) }
    else if(simbolo === "potenciacao")
    {   enviaMsg(`${num1} <sup>${num2}</sup> = ${num1 ** num2}`) }
    else
    {   enviaMsg("Erro") }
}

// Fazendo a raiz quadrada com valores verificados
function raizQuadrada(numero)
{
    const raiz = numero ** (0.5)
    enviaMsg(`Raiz quadrade de ${numero} = ${raiz}`)
}

// Envia a mensagem para página
function enviaMsg(msg)
{
    const result = document.querySelector("#result")
    const p = criaP()
    p.innerHTML = `${msg} <hr>`

    result.appendChild(p)
}

function criaP()
{
    const p = document.createElement("p")
    return p
}

function limparPage()
{   location.reload() }