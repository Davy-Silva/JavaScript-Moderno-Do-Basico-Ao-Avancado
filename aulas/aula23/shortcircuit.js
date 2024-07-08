/*  FALSY
 *
 *  false
 *  0 
 *  ''  ""  ``
 *  null / undefined
 *  NaN
 * 
 *  && -> Retorna o primeiro valor FALSY, se não tiver, o último
 *  || -> Retorna o primeiro valor VERDADEIRO, se não tiver, o último
 * 
 */

console.log('luiz' && '' && 'Maria') // Retorna ''
console.log('Luiz' && 'Davy' && 'Maria')

console.log(0 || false || null || 'string verdadeira' || true)
console.log(0 || '' || false || null || NaN)

//  Prática

const corUsuario = null
const corPadrao = corUsuario || 'preto'
console.log(`Cor: ${corPadrao}`)
