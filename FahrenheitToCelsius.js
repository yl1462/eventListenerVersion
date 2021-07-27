function calculateC() {
  let val = document.getElementById("targetF").value
  let result = (val - 32) * 5 / 9 
  document.getElementById("resultC").innerHTML=result + " °C"
}

function calculateF() {
  let val = document.getElementById("targetC").value
  let result = (val * 1.8) + 32 
  document.getElementById("resultF").innerHTML=result + " °F"
}