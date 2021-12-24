// for (let i = 0; i<10; i++) {
//     console.log(i)
// }

let myArr = [7, 23, 63, 8, 65]

let dragon = myArr[0]

for(let i = 0; i < myArr.length; i++) {
    if(myArr[i] > dragon) {
        dragon = myArr[i]

    }
}
console.log(dragon)