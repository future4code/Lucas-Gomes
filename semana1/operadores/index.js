//_________________________ "Interpretação" ______________________________

//__________________________ "Exercício 1" ______________________________

// false
// false
// true
// true

//__________________________ "Exercício 2" ______________________________

// O erro está no prompt, o colega esqueceu de definir ele como um Number
// Nesse caso, os números não serão somados, apenas colocados um ao lado do outro, como texto.

//__________________________ "Exercício 3" ______________________________

// Solução:

// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!"))

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

//__________________________ "Escrita de Código" ______________________________

//_____________________________ "Programa 1" ________________________________

// const idade = Number(prompt("Qual é a sua idade?"))
// const idadeMelhorAmigo = Number(prompt("Qual é a idade do seu melhor amigo(a)"))

// console.log("Sua idade é maior do que a do seu melhor amigo(a)?", idade > idadeMelhorAmigo)
// console.log("A diferença entre as idades é:", idade - idadeMelhorAmigo)

//____________________________ "Programa 2" ________________________________

// const numeroPar = Number(prompt("Insira um número par"))

// console.log("O resto da divisão por 2 é:", numeroPar % 2)

// O resto da divisão sempre será 0, pois números pares, ao serem divididos por 2, não deixam resto.

// Caso o um número par seja inserido, o resultado do resto será sempre 1.

//____________________________ "Programa 3" ________________________________

// const idade = Number(prompt("Quantos anos você tem?"))

// console.log("Sua idade em meses é:", idade * 12)
// console.log("Sua idade em dias é:", idade * 365 + 1 * (idade / 4))
// console.log("Sua idade em horas é:", idade * 8760 + 24 * (idade / 4))

//____________________________ "Programa 4" ________________________________

const numero1 = Number(prompt("Digite um número"))
const numero2 = Number(prompt("Digite outro número"))

console.log("O primeiro número é maior que segundo?", numero1 > numero2)
console.log("O primeiro número é igual ao segundo?", numero1 === numero2)
console.log("O primeiro número é divisível pelo segundo?", numero1 % numero2 === 0)
console.log("O segundo número é divisível pelo primeiro?", numero2 % numero1 === 0)
