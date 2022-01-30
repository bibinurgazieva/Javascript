document.addEventListener("DOMContentLoaded", () => {
    const inputElem = document.querySelector("input")
 
    document.getElementById("num1").addEventListener('click', () => {
        inputElem.value += '1'
    })
 
    document.getElementById("num2").addEventListener('click', () => {
        inputElem.value += '2'
    })
 
    document.getElementById("num3").addEventListener('click', () => {
        inputElem.value += '3'
    })
    document.getElementById("num4").addEventListener('click', () => {
        inputElem.value += '4'
    })
    document.getElementById("num5").addEventListener('click', () => {
        inputElem.value += '5'
    })
    document.getElementById("num6").addEventListener('click', () => {
        inputElem.value += '6'
    })
    document.getElementById("num7").addEventListener('click', () => {
        inputElem.value += '7'
    })
    document.getElementById("num8").addEventListener('click', () => {
        inputElem.value += '8'
    })
    document.getElementById("num9").addEventListener('click', () => {
        inputElem.value += '9'
    })
    document.getElementById("numzero").addEventListener('click', () => {
        inputElem.value += '0'
    })
 
    document.getElementById("plus").addEventListener('click', () => {
        inputElem.value += '+'
    })
    document.getElementById("minus").addEventListener('click', () => {
        inputElem.value += '-'
    })
    document.getElementById("mult").addEventListener('click', () => {
        inputElem.value += '*'
    })
    document.getElementById("divide").addEventListener('click', () => {
        inputElem.value += '/'
    })
 
    document.getElementById("equal").addEventListener('click', calculate)
})
 
function calculate () {
    let si = 0
    let text = document.querySelector("input").value
    for ( let i = 0; i < text.length; i++ ) {
        if ("+-/*".includes(text[i])){
            si = i
        }
    }
    const firstNum = Number(text.slice(0, si))
    const secondNum = Number(text.slice(si+1, text.length))
    let result = 0
    if (text[si] == "+") result = firstNum + secondNum
    else if (text[si] == "-") result = firstNum - secondNum
    else if (text[si] == "*") result = firstNum * secondNum
    else if (text[si] == "/") result = firstNum / secondNum
     
    document.querySelector("input").value = result
}