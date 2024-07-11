
const pontosUsuario = 1000

/*  Para não fazer isso tudo  

    if(pontosUsuario >= 1000)
    { console.log("Usuário VIP") }
    else
    {   console.log("Usuário Normal") }
*/
// Faça apenas isso com Operação Ternaria
// (condição) ? "Valor para verdadeiro" : "Valor para falso"
const nivelUsuario = pontosUsuario >= 1000 ? "Usuário VIP" : "Usuário Normal"
console.log(nivelUsuario)