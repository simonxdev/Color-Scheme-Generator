const btn = document.getElementById("getcolorbtn")
const colorpicker = document.getElementById("selectcolor")
const scheme = document.getElementById("selectmode")
const color1 = document.getElementById("color1")
const color2 = document.getElementById("color2")
const color3 = document.getElementById("color3")
const color4 = document.getElementById("color4")
const color5 = document.getElementById("color5")
const colorcode1 = document.getElementById("colorcode1")
const colorcode2 = document.getElementById("colorcode2")
const colorcode3 = document.getElementById("colorcode3")
const colorcode4 = document.getElementById("colorcode4")
const colorcode5 = document.getElementById("colorcode5")
const copytext = document.getElementById("clipboard-copy")

btn.addEventListener("click", () => {
  let newColor = colorpicker.value.substr(1,6)
  fetch(`https://www.thecolorapi.com/scheme?hex=${newColor}&mode=${scheme.value}&count=6`)
    .then(res => res.json())
    .then(data =>
      document.getElementById("main").innerHTML = `
        <div class="color" style="background-color:${data.colors[0].hex.value}" id="color1">&nbsp;<div class="colorcode" id="colorcode1" onclick="copyColor(1)">${data.colors[0].hex.value}</div></div>
        <div class="color" style="background-color:${data.colors[1].hex.value}" id="color2">&nbsp;<div class="colorcode" id="colorcode2" onclick="copyColor(2)">${data.colors[1].hex.value}</div></div>
        <div class="color" style="background-color:${data.colors[2].hex.value}" id="color3">&nbsp;<div class="colorcode" id="colorcode3" onclick="copyColor(3)">${data.colors[2].hex.value}</div></div>
        <div class="color" style="background-color:${data.colors[3].hex.value}" id="color4">&nbsp;<div class="colorcode" id="colorcode4" onclick="copyColor(4)">${data.colors[3].hex.value}</div></div>
        <div class="color" style="background-color:${data.colors[4].hex.value}" id="color5">&nbsp;<div class="colorcode" id="colorcode5" onclick="copyColor(5)">${data.colors[4].hex.value}</div></div>
        `
      )
})  

// Function for sending Colors to Clipboard
function copyColor(num){
  const texttocopy = document.getElementById("colorcode" + num).innerText
  navigator.clipboard.writeText(texttocopy);
  copytext.innerText = "Color " + texttocopy + " has been copyed to Clipboard."
  setTimeout(function(){
    copytext.innerText = ""
  }, 1400
  )
}