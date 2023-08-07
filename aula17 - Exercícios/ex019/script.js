let num = document.querySelector("input#fnum")
let lista = document.querySelector("select#flista")
let res = document.querySelector("div#res")
let valores = []
// Criar um vetor de forma global;

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    // Somente números de 1 a 100 serão aceitos;
    return true
  } else {
    return false
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    // Se a busca na lista dos valores forem diferentes de -1, adicione-os na lista;
    return true
  } else {
    // Se não, não aceite os valores digitados;
    return false
  }
}

function adicionar() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    // Os valores só serão adicionados se forem números e não estiverem na lista (repetidos)
    valores.push(Number(num.value))
    let item = document.createElement("option")
    item.text = `Valor ${num.value} adiconado.`
    lista.appendChild(item)
    // Insere um elemento filho (item) ao elemento pai (lista);
    res.innerHTML = ""
    // Quando for adicionado o elemento será limpado o resultado;
  } else {
    window.alert("Valor inválido ou já encontrado na lista.")
  }
  num.value = ""
  // limpar os valores do formulário de números;
  num.focus()
  // Adicionar foco no formulário de números;
}

function finalizar() {
  if (valores.length == 0) {
    window.alert("Adicione valores antes de finalizar!")
  } else {
    let tot = valores.length
    // Saber quantos elementos o vetor tem;
    let maior = valores[0]
    let menor = valores[0]
    // O maior e o menor número até o momento é o primeiro;
    let soma = 0
    let media = 0
    for (let pos in valores) {
      soma += valores[pos]
      if (valores[pos] > maior) maior = valores[pos]
      if (valores[pos] < menor) menor = valores[pos]
    }
    media = soma / tot
    // Calcular a média dos números cadastrados;
    res.innerHTML = ""
    // Zerar a variável res para receber os números cadastrados;
    res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
    // Adicionar e informar os números cadastrados;
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    // Informa o maior valor;
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    // Informa o menor valor;
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    // Informa a soma dos valores;
    res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    // Informa a média dos valores;
  }
}
