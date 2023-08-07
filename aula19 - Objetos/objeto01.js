/*
O que é um Objeto?
Um Objeto é uma coleção de propriedades, sendo cada propriedade
definida como uma sintaxe de par chave : valor. A chave pode
ser uma string e o valor pode ser qualquer informação.
Os Objetos são variáveis (guarda valor) e além de guarda valores
que são os atributos, Objetos podem guardar funcionalidades e são
conhecidos como métodos.
*/

let amigo = {nome: 'Ricardo', 
sexo: 'M', 
peso: 54, 
engordar(p=0){
  // Função no Objeto
  console.log('Engordou')
  this.peso += p
  // this é uma palavra auto-referência ao Objeto
}}
console.log(typeof amigo)
// Mostra que tipo é a variável
amigo.engordar(2)
// Soma do valor na Função engordar.
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)