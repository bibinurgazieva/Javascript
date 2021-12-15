let first_number = Number(prompt("First number"))
let operator = prompt("action")
let second_number = Number(prompt("Second number"))

if (operator === "-") {
    let res = first_number - second_number
    alert("Your answer is " + String(res))
} else if (operator === "+") {
    let res = first_number + second_number
    alert(`Your answer is ${res}`)
} else if(operator === "*") {
    let res = first_number * second_number
    alert(`Your answer is  ${res}`)
} else if (operator === "/") {
    let res = first_number / second_number
    alert(`Your answer is ${res}`)
} else if ( operator === "%") {
    let res = first_number % second_number
    alert(`Your answer is ${res}`)
} else if (operator === "**") {
    let res = first_number ** second_number
    alert(`Your answer is ${res}`)
} else {
    alert("Fatality!")
}
