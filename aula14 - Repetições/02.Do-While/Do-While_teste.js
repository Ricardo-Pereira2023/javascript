/*
Do-While é uma estrutura de repetição com teste lógico no final.
Ele é executado a primeira vez e então é feito o teste lógico,
se for verdadeiro ele continua executando o laço. Se for
falso, ele pula fora e segue o fluxo.
*/

var c = 1
do {
  console.log(`Passo ${c}`)
  c ++
} while (c <= 5);