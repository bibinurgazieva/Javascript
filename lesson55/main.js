document.addEventListener("DOMContentLoaded", () => {
    fetch ("https://api.openweathermap.org/data/2.5/weather?q=bishkek&appid=11c0d3dc6093f7442898ee49d2430d20")
        .then(response => response.json ())
        .then (data => {
            const bishkek = document.getElementById("bishkek")
            bishkek.innerText = convert (data.main.temp)


        })

        fetch ("https://api.openweathermap.org/data/2.5/weather?q=osh&appid=11c0d3dc6093f7442898ee49d2430d20")
        .then(response => response.json ())
        .then (data => {
            const osh = document.getElementById("osh")
            osh.innerText = convert (data.main.temp) 


        })

        fetch ("https://api.openweathermap.org/data/2.5/weather?q=tokmok&appid=11c0d3dc6093f7442898ee49d2430d20")
        .then(response => response.json ())
        .then (data => {
            const chuy = document.getElementById("chuy")
            chuy.innerText = convert (data.main.temp) 


        })

        fetch ("https://api.openweathermap.org/data/2.5/weather?q=batken&appid=11c0d3dc6093f7442898ee49d2430d20")
        .then(response => response.json ())
        .then (data => {
            const batken = document.getElementById("batken")
            batken.innerText = convert (data.main.temp) 


        })
        fetch ("https://api.openweathermap.org/data/2.5/weather?q=jalalabat&appid=11c0d3dc6093f7442898ee49d2430d20")
        .then(response => response.json ())
        .then (data => {
            const j_abad = document.getElementById("j_abad")
            j_abad.innerText = convert (data.main.temp) 


        })
        fetch ("https://api.openweathermap.org/data/2.5/weather?q=talas&appid=11c0d3dc6093f7442898ee49d2430d20")
        .then(response => response.json ())
        .then (data => {
            const talas = document.getElementById("talas")
            talas.innerText = convert (data.main.temp) 


        })
        fetch ("https://api.openweathermap.org/data/2.5/weather?q=naryn&appid=11c0d3dc6093f7442898ee49d2430d20")
        .then(response => response.json ())
        .then (data => {
            const naryn = document.getElementById("naryn")
            naryn.innerText = convert (data.main.temp) 


        })
        fetch ("https://api.openweathermap.org/data/2.5/weather?q=balykchy&appid=11c0d3dc6093f7442898ee49d2430d20")
        .then(response => response.json ())
        .then (data => {
            const i_kol = document.getElementById("i_kol")
            i_kol.innerText = convert (data.main.temp) 


        })



})

function convert (temperature) {
    let t = Math.round (temperature - 273.15)

    if ( t > 0 ) {
        t = `+${t}`
    }
    return t 
}

