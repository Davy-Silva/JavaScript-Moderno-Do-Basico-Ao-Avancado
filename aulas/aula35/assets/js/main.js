const elementos =
[
    {tag: "p", texto: "frase 1"},
    {tag: "div", texto: "frase 2"},
    {tag: "footer", texto: "frase 3"},
    {tag: "section", texto: "frase 4"}
]

const container = document.querySelector("#container")

container.appendChild(criaDiv())

function criaDiv()
{
    criaElements("div")
}

function criaElements(element)
{
    const div = document.createElement(element)
    return div
}

function child(element, texto)
{
    element.appendChild(texto)
}

function enviaMsg(msg)
{
    const div = document.querySelector("#container > div")
    div.innerHTML = (msg)
}


container.innerHTML += `${elementos[0].texto}`