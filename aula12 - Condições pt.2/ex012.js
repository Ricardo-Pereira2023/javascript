var agora = new Date()
var diaSem = agora.getDay()

var hora = new Date()
var horaDia = hora.getHours()

console.log(`Agora são exatamente ${horaDia} horas.`)

if (horaDia <= 12) {
  console.log("Bom Dia!")
} else if (horaDia <= 18) {
  console.log("Boa Tarde!")
} else {
  console.log("Boa Noite!")
}

/* 
Switch Case é uma Estrutura Condicional Múltipla. Ele funciona com valores/dados pontuais.
Só funciona com números inteiros e com carácteres (strings).
Não funciona com intervalos.

Os dias da semana começam no 0 = Domingo.
  0 = Domingo
  1 = Segunda
  2 = Terça
  3 = Quarta
  4 = Quinta
  5 = Sexta
  6 = Sábado
*/

switch (diaSem) {
  case 0:
    console.log("Hoje é Domingo!")
    break
  case 1:
    console.log("Hoje é Segunda-Feira!")
    break
  case 2:
    console.log("Hoje é Terça-Feira!")
    break
  case 3:
    console.log("Hoje é Quarta-Feira!")
    break
  case 4:
    console.log("Hoje é Quinta-Feira!")
    break
  case 5:
    console.log("Hoje é Sexta-Feira!")
    break
  case 6:
    console.log("Hoje é Sábado!")
    break
  default:
    console.log("[ERRO] Dia inválido!")
    break
}
