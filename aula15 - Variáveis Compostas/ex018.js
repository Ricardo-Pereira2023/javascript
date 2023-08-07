let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições.`)
let pos = num.indexOf(8)
/* Sintaxe usada para fazer uma busca dentro do vetor.
Caso um valor não seja encontrado, será retornado
 o valor -1 
 */

if (pos == -1) {
  console.log('O valor não foi encontrado!')
} else {
  console.log(`O valor está na posição ${pos}`)
}
/* Template String são strings que permitem expressões 
embutidas com placeholders ${}. Deve ser usada entre
as ``crases.
*/
