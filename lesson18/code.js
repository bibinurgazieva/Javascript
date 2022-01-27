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
    inputElem.addEventListener ("input", calculate)
})

function calculate () {
    let si = 0
    let text = document.querySelector("input").value 
    for(let i = 0; i< text.length; i++) {
        if (text[i] === "+") {
            si = i
        }
    }
    const firstnum = Number(text.slice(0, si))
    const secondnum  = Number (text.slice(si+1, text.length))
    const result = firstnum + secondnum
    document.querySelector("div").innerText = result 


}