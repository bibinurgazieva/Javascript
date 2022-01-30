document.addEventListener("DOMContentLoaded", () =>{
    const lightchange = document.querySelector("div")
    document.querySelector("#on").addEventListener("click", () =>{
        lightchange.style.backgroundColor = "yellow"
    }) 
    document.querySelector("#off").addEventListener("click", () =>{
        lightchange.style.backgroundColor = "black"
    }) 
})