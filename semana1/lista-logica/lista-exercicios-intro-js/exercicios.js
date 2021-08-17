// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  
  const alturaRetangulo = Number(prompt("Insira a altura do retângulo."))
  const larguraRetangulo = Number(prompt("Insira a largura do retângulo."))

  const area = alturaRetangulo * larguraRetangulo

  console.log(area)

}

// EXERCÍCIO 02
function imprimeIdade() {
  
  const anoAtual = Number(prompt("Digite o ano atual."))
  const anoDeNascimento = Number(prompt("Digite o ano de nascimento."))

  const idade = anoAtual - anoDeNascimento

  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {

  const IMC = peso / (altura * altura)

  return IMC

}

calculaIMC(50, 1.6)

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {

  const nome = prompt("Insira seu nome.")
  const idade = Number(prompt("Insira sua idade."))
  const email = prompt("Insira seu email.")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  
  const primeiraCorFavorita = prompt("Insira sua primeira cor favorita.")
  const segundaCorFavorita = prompt("Insira sua segunda cor favorita.")
  const terceiraCorFavorita = prompt("Insira sua terceira cor favorita.")

  resultado = imprimeTresCoresFavoritas

  return resultado

}

imprimeTresCoresFavoritas(primeiraCorFavorita, segundaCorFavorita, terceiraCorFavorita)

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {

  const resultadoDaStringEmMaiuscula = string.toUpperCase()

  return resultadoDaStringEmMaiuscula
}

retornaStringEmMaiuscula("qualquer coisa")

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {

  const resultadoIngresso = custo / valorIngresso

  return resultadoIngresso

}

calculaIngressosEspetaculo(2000, 60)

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
 
  const resultadoDoCheck = (string1.length - string2.length) === 0

  return resultadoDoCheck
}

checaStringsMesmoTamanho("Oi, tudo bem com você?", "Estou sim, e com você?")

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {

   const resultadoPrimeiroElementoArray = array[0]

   return resultadoPrimeiroElementoArray

}

retornaPrimeiroElemento([1, 3, 5, 10])

// EXERCÍCIO 10
function retornaUltimoElemento(array) {

  const resultadoUltimoElementoArray = array[array.length - 1]

  return resultadoUltimoElementoArray

}

retornaUltimoElemento([2, 9, 01, 88])

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
 
  ultimoNumero = array[array.length - 1]
  primeiroNumero = array[0]

  array.splice(0, 1)
  array.pop()
  array.unshift(ultimoNumero)
  array.push(primeiroNumero)

  const resultadoDaTroca = array

  return resultadoDaTroca

}

trocaPrimeiroEUltimo([1, 3])

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {

  const resultadoDoCheckDaIgualdade = string1.toLowerCase() === string2.toLowerCase()

  return resultadoDoCheckDaIgualdade

}

checaIgualdadeDesconsiderandoCase("OlA", "Ola")

// EXERCÍCIO 13
function checaRenovacaoRG() {
  
  const anoAtual = Number(prompt("Insira o ano atual.")
  const anoDeNascimento = Number(prompt("Insira o ano de nascimento."))
  const anoDeEmissaoDaIdentidade = Number(prompt("Insira o ano em que a indentidade foi emitida.")

  const renovacaoRG1 = (anoAtual - anoDeNascimento) <= 20 && (anoAtual - anoDeEmissaoDaIdentidade) >= 5
  const renovacaoRG2 = (anoAtual - anoDeNascimento) <= 50 && (anoAtual - anoDeNascimento) >= 20 && (anoAtual - anoDeEmissaoDaIdentidade) >= 10
  const renovacaoRG3 = (anoAtual - anoDeNascimento) > 50 && (anoAtual - anoDeEmissaoDaIdentidade) >= 15

  console.log(renovacaoRG1 || renovacaoRG2 || renovacaoRG3)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}