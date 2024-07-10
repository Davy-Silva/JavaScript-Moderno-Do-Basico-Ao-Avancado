// Formulário
const form = document.querySelector('#form')

// Capturar o evento, cria e testa variáveis
form.addEventListener('submit', capturaEvent)

function capturaEvent(event)
{
    event.preventDefault()

    const peso = Number(form.querySelector('#peso').value)
    const altura = Number(form.querySelector('#altura').value)
    //  Testa se peso e altura são validos
    if(!peso)
    {
        setResultado("Peso Inválido", false)
        return
    }
    if(!altura)
    {
        setResultado("Altura Inválida", false)
        return
    }

    const imc = calculaImc(peso, altura)
    const nivel = calculaNivel(imc)
    montaResultado(imc, nivel)
}

// Monta Resultado
function montaResultado(imc, nivel)
{
    setResultado(`Seu IMC é ${imc} (${nivel})`, true)
}

// Enviar Resultado e testa se é falso
function setResultado(msg, isvalid)
{
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ""

    const p = criaP()
    p.id = "p-id"

    // Testa se é falso para criar classe de falso
    if(!isvalid)
    {   p.classList.add("falso") }
    else
    {   p.classList.add("verdadeiro") }
  
    p.innerHTML = msg
    resultado.appendChild(p)
}

// Calcula IMC
function calculaImc(peso, altura)
{
    const imc = peso / altura ** 2
    return imc.toFixed(1)
}

// Retorna o nível de gravidade
function calculaNivel(imc)
{
    const nivel = ["Abaixo do peso", "Peso normal", "Sobrepeso", "Obesidade grau 1", "Obesidade grau 2", "Obesidade grau 3",]

    if(imc <= 18.5) return nivel[0]
    if(imc <= 24.9) return nivel[1]
    if(imc <= 29.9) return nivel[2]
    if(imc <= 34.9) return nivel[3]
    if(imc <= 39.9) return nivel[4]
    if(imc >= 40) return nivel[5]
}

// Cria e retorna um paragráfo
function criaP()
{
    const p = document.createElement("p")
    return p
}