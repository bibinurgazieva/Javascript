document.addEventListener("DOMContentLoaded", () =>{
    const d = document.querySelector("div")
    document.querySelector("button").addEventListener("click", () =>{
        d.style.backgroundColor = "green"
    })

    const widthinput = document.getElementById("changewidth")
    widthinput.addEventListener("input", () =>{
        d.style.width = widthinput.value + "px"
    })
    const heightchange = document.getElementById("changeheight")
    heightchange.addEventListener("input", () =>{
        d.style.height = heightchange.value + "vh"
    })
})