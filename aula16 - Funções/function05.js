/*
RECURSIVIDADE
Função Recursiva é quando uma Função chama ela mesma.
Usando um fatorial recursivo é quando um fatorial
de um número pode ser calculado baseado em um fatorial de outro. 
5! = 5 * 4 * 3 * 2 * 1 = 120
5! = 5 * 4!(24) = 120
Fatorial de n é:
n! = n * (n - 1)!
*/

function fatorial(n) {
  if (n == 1) {
    return 1
  } else {
    return n * fatorial(n - 1)
  }
}
console.log(fatorial(5))
