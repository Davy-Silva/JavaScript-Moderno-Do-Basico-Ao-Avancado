meuEscopo()

function meuEscopo()
{
    const form = document.querySelector('#form')
    const resultado = document.querySelector('#resultado')

    const pessoas = []

    form.addEventListener('submit', recebeEventoForm)

    function recebeEventoForm (evento)
    {
        evento.preventDefault()

        const nome = form.querySelector('#nome')
        const sobreNome = form.querySelector('#sobreNome')
        const peso = form.querySelector('#peso')
        const altura = form.querySelector('#altura')

        pessoas.push
        ({
            nome: nome.value,
            sobreNome: sobreNome.value,
            peso: peso.value,
            altura: altura.value,
        })

        resultado.innerHTML += `<br> Nome: ${nome.value} <br> Sobrenome: ${sobreNome.value} <br> Peso: ${peso.value} <br> Altura: ${altura.value} <hr>`
        
        console.log(pessoas) 
    }
}