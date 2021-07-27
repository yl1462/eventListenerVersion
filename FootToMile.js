function calculateM() {
  let val = document.getElementById("targetF").value
  let result = val / 5280 
  document.getElementById("resultM").innerHTML=result + " mile(s)"
}

function calculateF() {
  let val = document.getElementById("targetM").value
  let result = val * 5280 
  document.getElementById("resultF").innerHTML=result + " foot/feet"
}