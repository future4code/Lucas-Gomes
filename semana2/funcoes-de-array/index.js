// Atividade de interpretação de código

// Exercício 1

// Serão impresso no console o nome e o apelido de cada um dos três listados.

// Exercício 2

// Aparecerá no console o nome de cada um dos listados, em um array.

// Exercício 3

// Será impresso no console todos os nomes e apelidos dos listados, com execeção daqueles que são 
// "Chijo" em seu apelido.

// Atividade de escrita de código

// Exercício 1

// a.

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//  const nomesDosDogs = pets.map((item, index, array) => {
//     return item.nome
//  })
 
//  console.log(nomesDosDogs)

//  // b.

//  const racaDosDogs = pets.filter((item, index, array) => {
//     return item.raca === "Salsicha"
//  })
 
//  console.log(racaDosDogs)

//  // c. AINDA NÃO ENTENDI (não feito)

//  const dogsPoodleParaPromocao = pets.filter((item, index, array) => {
//     return item.raca === "Poodle"
//  })
 
//  console.log(dogsPoodleParaPromocao)

// Exercício 2

// a.

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

const nomeProdutos = produtos.map((item, index, array) => {
    return item.nome
})

console.log(nomeProdutos)

// b. AINDA NÃO ENTENDI (não feito)

// const produtoComDesconto = produtos.map(item => {
//     const produto = {...item}
//     produtos.preco - (produtos.preco * 0.05)
//     return produto 
//     })

// const descontosProdutos = produtos.map((item, index, array) => {
//     return item
// })

// console.log(descontosProdutos)

// c. 

const bebidas = produtos.filter((item, index, array) => {
    return item.categoria === "Bebidas"
})

console.log(bebidas)

// d.

const produtosYpe = produtos.filter((item, index, array) => {
    return item.nome.includes("Ypê")
})

console.log(produtosYpe)

// e.  AINDA NÃO ENTENDI (não feito)