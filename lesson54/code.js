document.addEventListener("DOMContentLoaded", main)

var app_id = "d844456b080641219066aa386c5144f5"

function main () {
    let url = `https://openexchangerates.org/api/latest.json?app_id=${app_id}`
    fetch(url).then (response => response.json()).then (data => {
        console.log(data)

        let usd = data.rates.KGS
        const element = document.getElementById("usd_value")
        element.innerText = usd

        let eur = data.rates.EUR 
        eur = Number(usd) / Number(eur) 
        const element2 = document.getElementById("euro_value")
        element2.innerText = eur

        let rub = data.rates.RUB 
        rub = Number(usd) / Number(rub) 
        const element3 = document.getElementById("rub_value")
        element3.innerText = rub


        
        element.innerText = Math.round (usd * 100) / 100
        element2.innerText = Math.round((eur * 100)) / 100
        element3.innerText = Math.round((rub * 100)) / 100



    })
}