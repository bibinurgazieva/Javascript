// let age = Number(prompt("How old are you?"))

// if (age < 18) {
//     console.log("Please leave the site!")
// } else if (age < 21) {
//     console.log("If you are in USA please leave the site")
// } else {
//     console.log("welcome!")
// }

let age = Number(prompt("Enter your age"))
if (age <= 12) {
    console.log("You are a kid")
} else if(age <= 18) {
    console.log("teenager")
} else if( age <= 23) {
    console.log("student")
} else if (age >= 24) {
    console.log("adult")
} else if (age >= 65) {
    console.log("pensioneer")
}