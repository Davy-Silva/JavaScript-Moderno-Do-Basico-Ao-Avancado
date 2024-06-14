const nome = 'Davy'
const sobrenome = 'Silva'
const idade = 16
let peso = 60
let altura = 1.67
let imc = peso / (altura * altura)
let anoNascimeto = 2024 - idade

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg', '.') // VÍRGULA
console.log('tem ' + altura + ' de altura e seu IMC é de ' + imc + '.') // CONTATENAÇÃO
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimeto}.`) // TEMPLATE STRING
