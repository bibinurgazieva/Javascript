let result = [23, 85, 32, 99, 22, 24]; 

let b = Number(prompt("Enter the lucky numbers"));

while (b) {
    if ( result.includes(b) ) {
        alert("You win")
    } 
    else {
        alert("You lose")
    }
    b = Number(prompt("Enter your lucky numbers"))
}



