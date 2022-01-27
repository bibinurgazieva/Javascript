// function mySum (a, b) {
//     return a + b
// }

// let myMult = function (a, b) {
//     return a * b
// }

// let c = mySum

// let d = (a, b) => { return a / b };

// let e = (a, b ) => a ** b

// console.log(mySum(2, 5))
// console.log(myMult(2, 5))
// console.log(c (10, 4))
// console.log(d (10, 2)) 
// console.log(e (3, 4))

n = Number(prompt())

console.log (factorial(n))

function factorial (num) {
    let res = 1
    for (let i = 1; i<= num; i++) {
        res *= i
    }
    return res 
}

let myfactorial = (num) => {
    let res = 1
    for (let i = 1; i<= num; i++) {
        res *= i
    }
    return res
}