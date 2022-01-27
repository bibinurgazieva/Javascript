// Events
document.addEventListener ("DOMcontentloded", open)

function open () {
    const btn = document.querySelector ("button")
    btn.addEventListener ("click", btnClick)

}

function btnClick () {
    const counter = document.querySelector("div")
    let k = Number(counter.textContent)
    k++
    counter.textContent = k
}
