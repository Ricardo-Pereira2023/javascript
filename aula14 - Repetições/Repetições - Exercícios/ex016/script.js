function tabuada() {
  let num = document.getElementById('txtn') // Pegar o número
  let tab = document.getElementById('seltab') // Pegar a área da tabuada
  if (num.value.length == 0) {
    window.alert('Por favor, digite um número!') // Se não houver um valor, imprimir um alerta
  } else {
    let n = Number(num.value) // Converter a variável "n" para number
    let c = 1
    tab.innerHTML = '' // Limpar a área da tabuada.
    while (c <= 10) {
      let item = document.createElement('option') // Criar um elemento para gerar opções
      item.text = `${n} x ${c} = ${n*c}` // Fórmula da tabuada
      item.value = `tab${c}` // Saber qual foi o item que foi selecionado.
      tab.appendChild(item) // adicionar um elemento filho que vai ser o item.
      c++
    }
  }
}