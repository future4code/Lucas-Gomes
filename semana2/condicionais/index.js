// Atividade de interpretação

// Exercício 1

// a. É um teste para saber se determinado número é par ou ímpar.

// b. Os números pares passarão no teste.

// c. Os números ímpares não passarão no teste.

// Exercício 2

// O código serve para mostrar o preço da fruta escolhida.

// O preço da fruta maçã é, R$ 2.25

// O preço da fruta  Pêra  é  R$  5

// Exercício 3

// A primeira linha está pedindo um número para o usuário.

// Caso digite 10, aparecerá que o número passou no teste, já -10, aparecerá uma mensagem de erro.

// Isso acontece pois variáveis criadas dentro de blocos e são declaradas como const ou let, 
// tem seu escopo bloqueado, assim, o console não consegue imprimir essa informação

// Atividade de escrita

// Exercício 1

// const idade = Number(prompt("Digite sua idade."))

// if (idade >= 18)
// console.log("Você pode dirigir.")

// else if (idade < 18)
// console.log("Você não pode dirigir.")

// Exercício 2

// const horarioDeAula = prompt("Digite o turno que estuda: M (matutino) ou V (Vespertino) ou N (Noturno).")

// if (horarioDeAula === "M") {
// console.log("Bom dia!")
// }

// else if (horarioDeAula === "V") {
// console.log("Boa tarde!")
// }

// else if (horarioDeAula === "N") {
// console.log("Boa noite!")
// }

// Exercício 3

// const horarioDeAula = prompt("Digite o turno que estuda: M (matutino) ou V (Vespertino) ou N (Noturno).")

// switch (horarioDeAula){

//     case "M":
//         console.log("Bom dia!")
//         break

//     case "V":
//         console.log("Boa tarde!")
//         break

//     case "N":
//         console.log("Boa noite!")
//         break
//      default:
//         console.log("Digite uma das letras indicadas")
//         break
// }

// Exercício 4

const generoDoFilme = prompt("Digite o genero do filme.").toLowerCase()
const precoDoIngresso = Number(prompt("Digite o preço do filme."))

if (generoDoFilme === "fantasia" && precoDoIngresso <= 15){
    console.log("Bom filme")
}
    else {
        console.log("Escolha outro filme :(")
    }