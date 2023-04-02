console.log('Hello World!');

var output = document.querySelector('#output')

var buttons = document.querySelectorAll('button')

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.id === "=") {
      output.value = eval(output.value)
    } else if (btn.id === "C"){
      output.value = ""
    }else if (btn.id == "del"){
    output.value = output.value.slice(0,-1)
    }else {
      output.value += btn.id
    }
  })
})