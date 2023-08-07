function somar() {
   var tn1 = window.document.getElementById("txtn1")
   var tn2 = window.document.querySelector("input#txtn2")
   var somar = window.document.getElementById("somar")
   var n1 = Number(tn1.value)
   var n2 = Number(tn2.value)
   var s = n1 + n2
   somar.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${s}</strong>`
}
function subtrair() {
  var tn3 = window.document.getElementById("txtn3")
  var tn4 = window.document.querySelector("input#txtn4")
  var subtrair = window.document.getElementById("subtrair")
  var n3 = Number(tn3.value)
  var n4 = Number(tn4.value)
  var s = n3 - n4
  subtrair.innerHTML = `A subtração entre ${n3} e ${n4} é igual a <strong>${s}</strong>`
}
function multiplicar() {
  var tn5 = window.document.getElementById("txtn5")
  var tn6 = window.document.querySelector("input#txtn6")
  var multiplicar = window.document.getElementById("multiplicar")
  var n5 = Number(tn5.value)
  var n6 = Number(tn6.value)
  var s = n5 * n6
  multiplicar.innerHTML = `A multiplicação entre ${n5} e ${n6} é igual a <strong>${s}</strong>`
}
 function dividir() {
   var tn7 = window.document.getElementById("txtn7")
   var tn8 = window.document.querySelector("input#txtn8")
   var dividir = window.document.getElementById("dividir")
   var n7 = Number(tn7.value)
   var n8 = Number(tn8.value)
   var s = n7 / n8
   dividir.innerHTML = `A divisão entre ${n7} e ${n8} é igual a <strong>${s}</strong>`
 }