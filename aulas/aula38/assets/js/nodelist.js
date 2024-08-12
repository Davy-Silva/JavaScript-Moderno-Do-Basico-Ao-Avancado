const containerParagrafos = document.querySelector('#containerParagrafos')
const paragrafos = containerParagrafos.querySelectorAll('p')

const estiloBody = getComputedStyle(document.body) 
const backgroundColorBody = estiloBody.backgroundColor
console.log(backgroundColorBody)

for( let p of paragrafos )
{
    p.style.backgroundColor = 'rgb(0, 0, 255)'
    p.style.color = 'white'
    p.style.padding = '8px'
    p.style.borderRadius = '5px'
    console.log(backgroundColorBody)
}

