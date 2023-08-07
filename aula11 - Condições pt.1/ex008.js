function verificar() {
  var país = window.document.querySelector('input#txtworld')
  var res = window.document.querySelector('div#res')
  var ver = (país.value)
  if(ver === 'Brasil') {
    res.innerHTML += `<p>País: <strong>${ver}</strong><br> Sua Nacionalidade é <strong>Brasileiro(a)!</strong></p>`
  } else {
    res.innerHTML += `<p>País: <strong>${ver}</strong><br> Sua Nacionalidade é <strong>Estrangeiro(a)!</strong></p>`
  }
}


