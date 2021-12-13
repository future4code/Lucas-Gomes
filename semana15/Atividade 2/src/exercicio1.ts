// A)

// const minhaString: string = 1

// Aparece uma mensagem de erro dizendo que um number não pode ser atribuída a uma string.

// B)

type Pessoa = {nome: string, idade: number, corFavorita: string}

// C)

const pessoa1: Pessoa = {
    nome: "Gabriel",
    idade: 25,
    corFavorita: "Cinza"
}
const pessoa2: Pessoa = {
    nome: "Julia",
    idade: 33,
    corFavorita: "Azul celeste"
}
const pessoa3: Pessoa = {
    nome: "Sara",
    idade: 29,
    corFavorita: "Laranja"
}

// D)

enum corFavorita {
    AMARELO = "Amarelo",
    ANIL = "Anil",
    AZUL = "Azul",
    LARANJA = "Laranja",
    VERDE = "Verde",
    VERMELHO = "Vermelho",
    VIOLETA = "Violeta"
}