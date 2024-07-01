function saudacao(nome)
{
    // Executa uma ação console.log(`Bom Dia ${nome}`)
    return `Bom Dia ${nome}` // Retorna um valor 
}

const variavel = saudacao("Luiz")
console.log(variavel) 

function soma(x, y) // Se for colocado (x = 1, y = 1) quando não for enviado valor, eles vão assumir o valor predefinido
{
    const result = x * y
    return result
    console.log("Hello word") // Depois do return a função é encerrada
}

console.log(soma(5, 5))

//console.log(result) <- Não é possivel acessar nada dentro da função (scop)

const result = soma(2, 2) // É possivel criar outra variavel com o mesmo nome fora da função (scop)
console.log(result)

// FUNÇÃO ANONIMA
const raiz = function (n)
{
    return n ** 0.5
}

console.log(raiz(9))

// ARROW FUNCTION
const raiz1 = n => n ** 0.5 // Simplificação da função pequena

console.log(raiz1(16))