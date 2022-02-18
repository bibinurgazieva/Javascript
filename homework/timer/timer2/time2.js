document.addEventListener("DOMContentLoaded", () => {
    const elem = document.querySelector("div")
    elem.innerText = "25:00"

    let intervalID = 0

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


})

function timer () {
    const elem = document.querySelector("div")
    let current = elem.innerText.split(":")
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

    elem.innerText = `${minutes}:${seconds}`

}
        
function convert (num) {
    if (num < 10) {
        return `0${num}`
    } else {
        return String(num)
    }
}