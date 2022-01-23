// 1st exercise
function checkAge(age) {
    if (age > 18) {
      return true;
    }
    
    return confirm('Родители разрешили?');
  }

//   yes it works

// 2nd exercise

function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Родители разрешили?');
    }
  }

function checkage (age) {
   return (age > 18) ? true : confirm ('Parents permission?') 
}
function checkage (age) {
    return (age > 18) || confirm ('parents permission')
}
// я хотела использовать и ? и ||  в одной функции
//  но это оказывается неправильно, надо использовать чтото одно
//  полагаю лучше и короче это использование ||

// 3rd exercise 

function min (a, b) {
    if (a < b) {
        return a
    } else{
        return b 
    }
}

// 4th exercise
let x = Number(prompt("enter the number"))
let n = Number (prompt("enter the exponent power"))

let result = Math.pow(x, n) 
console.log (result) 