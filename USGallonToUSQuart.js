function calculateQ() {
  let val = document.getElementById("targetG").value
  let result = val * 4 
  document.getElementById("resultQ").innerHTML=result + " quart(s)"
}

function calculateG() {
  let val = document.getElementById("targetQ").value
  let result = val / 4 
  document.getElementById("resultG").innerHTML=result + " gallon(s)"
}