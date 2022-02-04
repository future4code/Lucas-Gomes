// Atividade de interpretação

// Exercício 1

// O valor impresso no console será 10, pois o código está fazendo uma soma entre 'valor' e 'i', enquanto 'i'
// for menor que 5, essa soma continuará ocorrendo, até que ele não seja menor que 5, ou seja, até o próprio 5.
// Então, ao somar 5 de 'i' com o 5 do valor, o resultado será 10.

// Exercício 2

// será impresso todos os números que são maiores do que 18, sendo eles:  19, 21, 23, 25, 27 e 30.

// Sim, para isso acontecer, deve-se retirar o: if (numero > 18) {}.

// Exercício 3

// Digitando o número 4, será impresso quatro linhas com asteriscos, cada uma delas com uma quantidade crescente
// deles, sendo que a primeira linha terá um e a última, quatro.

// Atividade de escrita

// Exercício 1

// const quantidadeDePetsUsuario = Number(prompt("Quantos pets você tem?"))

// if (quantidadeDePetsUsuario === 0) {
//     console.log("Que pena! Você pode adotar um pet!")
// }

// for (let i = 0; i !== quantidadeDePetsUsuario; i++) {       

// const nomePetUsuario = prompt("Digite o nome de um pet.")
// console.log(nomePetUsuario)
// const contagemPets = []
// contagemPets.push(nomePetUsuario)

//         }

// Exercício 2

const arrayOriginal = [1, 3, 5, 10, 23, 60, 88, 100]

console.log(arrayOriginal)

{
    resultado = arrayOriginal[0]
    arrayLength = arrayOriginal.length
    for (i = 0; i !== arrayLength; i++)
    resultado /= 10;
    novoArray = []
    novoArray.push(resultado)
}

console.log(resultado)
