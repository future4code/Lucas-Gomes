// _________________ Interpretação

// _________ Exercício 1

// a. undefined
// b. null
// c. 11
// d. 3
// e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// f. 9

// _________ Exercício 2

// SUBI NUM ÔNIBUS EM MIRROCOS

// ___________________ Escrita

// _________ Exercício 1

// const nomeDoUsuario = prompt("Digite seu nome.")
// const emailDoUsuario = prompt("Digite seu e-mail.")

// console.log("O e-mail", emailDoUsuario, "foi cadastrado com sucesso. Seja bem-vindo(a)", nomeDoUsuario)

// _________ Exercício 2

// let array = ["lasanha", "batata frita", "filé de frango", "bolinho de carne", "hambúrguer"]

// console.log(array)

// console.log("Essas são minhas comidas favoritas:")
// console.log(array [0])
// console.log(array [1])
// console.log(array [2])
// console.log(array [3])
// console.log(array [4])

// comidaFavoritaUsuario = prompt("Qual a sua comida favorita?")

// let novaComida = 0
// array [0 + 1] = comidaFavoritaUsuario

// console.log(array)

// ___________ Exercício 3

let array = []
const listaDeTarefas = array

const tarefa1 = prompt("Digite a primeira tarefa a ser realizada hoje:")
const tarefa2 = prompt("Digite a segunda tarefa a ser realizada hoje:")
const tarefa3 = prompt("Digite a terceira tarefa a ser realizada hoje:")

array.push(tarefa1, tarefa2, tarefa3)

console.log(array)

let indice = Number(prompt("Digite o indice de uma tarefa já realizada (0, 1 ou 2)."))

array.splice(indice, 1)

console.log(array)
