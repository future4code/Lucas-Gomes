console.log("Boas vindas ao jogo de Blackjack!")

if(confirm("Quer iniciar uma nova rodada?")) {

   const cartaUsuario1 = comprarCarta();
   const cartaUsuario2 = comprarCarta();
   const cartaComputador1 = comprarCarta();
   const cartaComputador2 = comprarCarta();
   console.log(cartaUsuario1.texto)
   console.log(cartaUsuario2.valor)
   console.log(cartaComputador1.texto)
   console.log(cartaComputador2.valor)

   const cartaUsuarioSoma = cartaUsuario1.valor + cartaUsuario2.valor
   const cartaComputadorSoma = cartaComputador1.valor + cartaComputador2.valor

   console.log(`Usuário - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} - pontuação ${cartaUsuarioSoma}`)
   console.log(`Computador - cartas: ${cartaComputador1.texto} ${cartaComputador2.texto} - pontuação ${cartaComputadorSoma}`)

}
      else {

         console.log("O jogo acabou.")

      }

// if(cartaUsuarioSoma > cartaComputadorSoma){
//       console.log("O usuário venceu!")
//    }
//       else if(cartaComputadorSoma > cartaUsuarioSoma){
//          console.log("O computador venceu!")
//       }
//          else if(cartaComputadorSoma === cartaUsuarioSoma){
//          console.log("Empate!")
//       }