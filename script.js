const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here
const btn_reset = document.querySelector('#reset')
const btn_search = document.querySelector('#search')
const text = text.document.querySelector('#text')

// author.innerHTML = '630610761 WINNAPAT KAEWMORA'

btn_toggle.onclick = () => {
  if(btn_toggle.innerHTML === 'Show Calculation'){
    let name = author.innerHTML
    let number = /\d+/
    calculation.innerHTML = name.match(number)+length.value
    btn_toggle.innerHTML = "Display author"
    // author.style.display = "none"
    // calculation.style.display = "block"
  }
  else{
    btn_toggle.innerHTML = 'Show Calculation'
    // author.style.display = "block"
    // calculation.style.display = "none"
  }
}

// more codes for Search and Reset buttons here
btn_search.onclick = () => {
  ()
}

btn_reset.onclick = () => {
  ()
}
