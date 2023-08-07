var agora = new Date() // Comando para buscar a hora atual
var hora = agora.getHours() // Ligação do comando com a variável hora
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
  console.log('Bom Dia!')
} else if (hora <= 18){
  console.log('Boa Tarde!')
 }else {
  console.log('Boa Noite!')
}