let varA = 'A'  // B
const varA1 = varA
let varB = 'B'  // C
let varC = 'C'  // A

varA = varB
varB = varC
varC = varA1

console.log(varA, varB, varC);