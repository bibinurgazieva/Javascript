document.addEventListener("DOMContentLoaded", () => {
    const first = document.querySelector("#input1")
    const second = document.querySelector("#input2")
    const result = document.querySelector("div")

    plusbutton.addEventListener("click", 
        function sum() {
        result.innerText = Number(first.value) + Number(second.value)

    })
})
    