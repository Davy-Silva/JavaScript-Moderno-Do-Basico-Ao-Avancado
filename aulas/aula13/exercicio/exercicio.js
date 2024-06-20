const nome = prompt('Digite seu nome completo')
const letras = nome.length
const segundaLetra = nome[1]

document.body.innerHTML = `O seu nome é ${nome}. <br/>`
document.body.innerHTML += `Seu nome tem ${letras} letras. <br/>`
document.body.innerHTML += `A segunda letra do seu nome é: ${segundaLetra}. <br/>`
/*
document.body.innerHTML += `Qual o primeiro índice da letra a no seu nome? ${}. <br/>`
document.body.innerHTML += `Qual o último índice da letra a no seu nome? ${}. <br/>`
document.body.innerHTML += `As últimas3 letras do seu noem são: ${}. <br/>`
document.body.innerHTML += `As palavras do seu nome são: ${}. <br/>`
document.body.innerHTML += `Seu nome com letras maiúsculas: ${}. <br/>`
document.body.innerHTML += `Seu nome com letra minúsculas: ${}. <br/>`
*/