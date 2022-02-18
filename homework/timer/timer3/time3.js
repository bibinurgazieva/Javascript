document.addEventListener("DOMContentLoaded", () => {
    const elem = document.querySelector("input")

    let intervalID = 0

    if (localStorage.getItem("time")) {
        elem.value = localStorage.getItem("time")
    } else {
        elem.value = elem.innerText
    }
    
    const startbutton = document.getElementById("start")
    
    startbutton.addEventListener("click", () => {
        if (intervalID < 1) {
            intervalID = setInterval(timer, 1000)
        }
    })
    
    const pausebutton = document.getElementById("pause")
    pausebutton.addEventListener("click", () => 
    {  clearInterval(intervalID)
        intervalID = 0
    })

    const stopbutton = document.getElementById("stop")
    stopbutton.addEventListener("click", () => {
        clearInterval (intervalID)
        intervalID = 0
        const elem = document.querySelector("input")
        elem.value = elem.innerText
    })


})

function timer () {
    const elem = document.querySelector("input")
    let current = elem.value.split(":")
    let seconds = Number(current[1])
    let minutes = Number(current[0])

    if(minutes === 0 && seconds === 0) {
        return 0
    }

    if (seconds === 0) {
        seconds = 59
        minutes--
    } else {
        seconds--
    }

    seconds = convert(seconds)
    minutes = convert(minutes)

    elem.value = `${minutes}:${seconds}`

    localStorage.setItem ("time", elem.value) 

}
        
function convert (num) {
    if (num < 10) {
        return `0${num}`
    } else {
        return String(num)
    }
}