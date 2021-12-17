let a = Number(prompt("Enter the first number"))

let b = Number(prompt("Enter the second number"))

let c = Number(prompt("Enter the third number"))

let d = Number(prompt("Enter the fourth number"))


// if ( a > b) {
//     if (a > c ) {
//         console.log(a)
//     } else {
//         console.log(c)
//     }
// }   else {
//     if ( b > c ) {
//         console.log(b)
//     } else {
//         console.log(c)
//     }
// }   else {

// }

if (a > b) {
    if ( a > c ) {
        if(a > d) {
            console.log(a)
        } else{
            console.log(d)
        }
    } else {
        if (c > d ) {
        console.log(c)
    } else {
        console.log(d)
    } 
}
} else  {
    if ( b > c ) {
    if ( b > d ) {
        console.log(b)
    } else {
        console.log(d)
    }

} else{
    if ( c > d ) {
    console.log(c)
}   else {
    console.log(d)
    }
}
}
