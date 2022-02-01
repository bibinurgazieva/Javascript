// document.addEventListener("DOMContentLoaded", () => {
//     const first = document.querySelector("#input1")
//     const second = document.querySelector("#input2")
//     const resultNode = document.querySelector("div")

//     first.addEventListener("input", () => {
//         resultNode.innerText = Number(first.value) + Number(second.value)
//     })
//     second.addEventListener("input", () => {
//         resultNode.innerText = Number(first.value) + Number(second.value)
//     })
// })

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
 
    document.getElementById("plus").addEventListener('click', () => {
        inputElem.value += '+'
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