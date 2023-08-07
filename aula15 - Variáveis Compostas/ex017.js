/*
Um Array ou vetor é uma variável que tem vários elementos, cada elemento é composto 
por seu valor e por uma chave de identificação.
*/

let num = [5, 8, 2, 9, 3]
// vetor inicial com 5 índices [0, 1, 2, 3, 4]
// num [5] = 6
// Método tradicional que acrescenta valores dentro de um elemento de um array.

num.push(1)
// Novo método interno que acrescenta valores dentro de um elemento de um array.

num.sort()
// O sort pega todos os elementos do vetor e coloca em ordem crescente.

/*num.length não é um método, mas sim um atributo. Ele serve para indentificar
quantos elementos (comprimento) tem um array.
*/

console.log(`O vetor tem ${num.length} posições.`)
console.log(num)
console.log("\n")

// Sintaxe tradicional do percurso para exibição no vetor.
// for (let pos = 0; pos < num.length; pos++) {
//   console.log(`A posição ${pos} tem o valor ${num[pos]}`)}

// Sintaxe simplificada do percurso para exibição do vetor.
for (let pos in num) {
  console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
/*
Leia-se: para cada posição na variável num (composta), será
mostrado o resultado da váriavel num[pos].

ATENÇÃO: Essa sintaxe simplificada do For só funciona para
Arrays e Objects.
Todo Array em JS é um Object!
*/
