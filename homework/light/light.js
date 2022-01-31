// document.addEventListener("DOMContentLoaded", () =>{
//     const lightchange = document.querySelector("div")
//     document.querySelector("#on").addEventListener("click", () =>{
//         lightchange.style.backgroundColor = "yellow"
//     }) 
//     document.querySelector("#off").addEventListener("click", () =>{
//         lightchange.style.backgroundColor = "black"
//     }) 
// })

document.addEventListener("DOMContentLoaded", main)

function main () {
    document.querySelector("button").addEventListener("click", toggle)
}

function toggle () {
    const lamp = document.querySelector("div")
    const btn = document.querySelector("button")
    if (lamp.style.backgroundColor === "yellow") {
        lamp.style.backgroundColor = "white"
        btn.textContent = "turn on"
    }
    else {
        lamp.style.backgroundColor = "yellow"
        btn.textContent = "turn off"
    }
}