// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number). Retorne true se a imagem estiver no modo paisagem.

const ePaisagem = ( altura, largura ) => altura < largura // ? true : false
// Não precisa da operação ternária, pois a comparação já retorna true ou false

console.log( ePaisagem( 1080, 1920 ) )
