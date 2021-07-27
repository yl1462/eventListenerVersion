function calculateO() {
  let val = document.getElementById("targetP").value
  let result = val * 16 
  document.getElementById("resultO").innerHTML=result + " Ounce(s)"
}

function calculateP() {
  let val = document.getElementById("targetO").value
  let result = val / 16 
  document.getElementById("resultP").innerHTML=result + " Pound(s)"
}