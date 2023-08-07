function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = window.document.getElementById('txtano')
  var res = window.document.querySelector('div#res')

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tem novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    
    img.setAttribute('id', 'foto')

    if (fsex[0].checked) {
      gênero = 'Homem'
      if (idade >= 0 && idade < 10) {
        // Criança
        img.setAttribute('src', 'imagens/menino.png')
      } else if (idade < 21) {
        // Jovem
        img.setAttribute('src', 'imagens/garoto.png')
      } else if (idade < 50) {
        // Adulto
        img.setAttribute('src', 'imagens/homem.png')
      } else {
        // Idoso
        img.setAttribute('src', 'imagens/idoso.png')
      }
    } else if (fsex[1].checked) {
      gênero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        // Criança
        img.setAttribute('src', 'imagens/menina.png')
      } else if (idade < 21) {
        // Jovem
        img.setAttribute('src', 'imagens/garota.png')
      } else if (idade < 50) {
        // Adulta
        img.setAttribute('src', 'imagens/mulher.png')
      } else {
        // Idosa
        img.setAttribute('src', 'imagens/idosa.png')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} ano(s).`
    res.appendChild(img)
  }
}