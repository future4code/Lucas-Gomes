// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

retornaTamanhoArray(1,20,40,50)

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

retornaArrayInvertido("Banana", "Chocolate", "Maçã", "Brigadeiro")

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort()
}

retornaArrayOrdenado(1,5,3,10,2,11)

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  
}

retornaNumerosPares(0,1,2,3,4,5,6,7,8,9,10)

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let i = 0
  let maior = -Infinity
    while(i < array.length) {
        if(array[i] > maior)
        maior = array[i]
    }
    i++
}

retornaMaiorNumero(1,50,77,44,33,75,60,51,89.67,20)

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

    // const ObjetoEntreDoisNumeros =
    //     maiorNumero: 
    //     maiorDivisivelPorMenor:
    //     diferenca:

}

retornaObjetoEntreDoisNumeros(5,80)

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    if(ladoA === ladoB && ladoA === ladoC && ladoB === ladoC){
        return "Equilátero"
    } else if(ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC){
        return "Escaleno"
    } else {
        return "Isósceles"
    }
}

classificaTriangulo(5,5,5)

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}