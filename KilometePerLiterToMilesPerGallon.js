function calculateKPL() {
  let val = document.getElementById("targetMPG").value
  let result = val * 0.425144 
  document.getElementById("resultKPL").innerHTML=result + " Kilometers Per Liter"
}

function calculateMPG() {
  let val = document.getElementById("targetKPL").value
  let result = val / 0.425144 
  document.getElementById("resultMPG").innerHTML=result + " Miles Per Gallon"
}