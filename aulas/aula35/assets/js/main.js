const elementos =
[
    {tag: "p", texto: "frase 1"},
    {tag: "div", texto: "frase 2"},
    {tag: "footer", texto: "frase 3"},
    {tag: "section", texto: "frase 4"}
]

const container = document.querySelector("#container")
const div = document.createElement("div")

for(let i = 0; i < elementos.length; i++)
{
    const { tag, texto } = elementos[i]
    const tagCriada = document.createElement(tag)
    const textoCriado = document.createTextNode(texto)

    tagCriada.appendChild(textoCriado)
    div.appendChild(tagCriada)
}

container.appendChild(div)