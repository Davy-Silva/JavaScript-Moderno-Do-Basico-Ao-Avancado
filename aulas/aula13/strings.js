let umaString = "Um \"texto\""
let umaString1 = "Um \\texto"

//                01234567
let umaString2 = "Um texto"

console.log(umaString)
console.log(umaString1)

console.log(umaString2[4])
console.log(umaString2.charAt(6)) // mostra valor do index
console.log(umaString2.concat(' em um lindo dia.')) // concatena
console.log(umaString2.indexOf('texto')) // mostra o index onde começa
console.log(umaString2.indexOf('Um', 3)) // mostra o index onde começa a partir do index 3
console.log(umaString2.lastIndexOf('Um', 3)) // mesmo do de cima, mas começa de trás pra frentre
console.log(umaString2.length) // ver o tamanho da string (começa do 1 e não do 0)
console.log(umaString2.slice(3, 7)) // limita onde começa e termina
console.log(umaString2.toUpperCase()) // deixa tudo maíusculo
console.log(umaString2.toLowerCase()) // deixa tudo minúsculo