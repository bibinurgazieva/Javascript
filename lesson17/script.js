document.addEventListener("DOMContentLoaded", run)

function run () {
    const plusbtn = document.getElementById("plus")
    plusbtn.addEventListener("click", mysum)

    const plusbtn = document.getElementById("minus")
    plusbtn.addEventListener("click", mysum)

    const plusbtn = document.getElementById("divbutton")
    plusbtn.addEventListener("click", mysum)

    const plusbtn = document.getElementById("multbutton")
    plusbtn.addEventListener("click", mysum)


}

function mysum() {
    const numberOne = document.querySelector("#input1")
    const numberTwo = document.querySelector("#input2")
    let result = Number(numberOne.value) + Number(numberTwo.value)
    const resultNode = document.getElementById("myres") 
    resultNode.textContent = result 

}