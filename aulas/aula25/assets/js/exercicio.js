escopo()

function escopo()
{

    const resultado = document.querySelector('#resultado')
    const form = document.querySelector('form')
    form.addEventListener('submit', enviaImc)

    function enviaImc(evento)
    {
        evento.preventDefault()

        const peso = Number(document.querySelector('#peso').value)
        const altura = Number(document.querySelector('#altura').value)
        const imc = peso / (altura * altura)

        if(imc < 18.5)
        {   resultado.innerHTML = `Seu IMC é ${imc.toFixed(1)}, (Abaixo do normal)` }
        else if(imc >= 18.5 && imc <= 24.9)
        {   resultado.innerHTML = `Seu IMC é ${imc.toFixed(1)}, (Peso nornal)` }
        else if(imc >= 25 && imc <= 29.9)
        {   resultado.innerHTML = `Seu IMC é ${imc.toFixed(1)}, (Sobrepeso)` }
        else if(imc >= 30 && imc <= 34.9)
        {   resultado.innerHTML = `Seu IMC é ${imc.toFixed(1)}, (Obesidade grau 1)` }
        else if(imc >= 35 && imc <= 39.9)
        {   resultado.innerHTML = `Seu IMC é ${imc.toFixed(1)}, (Obesidade grau 2)` }
        else if( imc >= 40)
        {   resultado.innerHTML = `Seu IMC é ${imc.toFixed(1)}, (Obesidade grau 3)` }
        else
        {   resultado.innerHTML = "Peso inválido"}
    }
}
