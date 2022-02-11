function massive (myarray, resultarray) {
    for (let i=0; i < myarray.length; i++) {
        if (Array.isArray(myarray[i])) {
            massive (myarray[i], resultarray)
        } else {
            resultarray.push(myarray[i])
        }
    }
    return resultarray
}

let a = [1, 3,[5, 7], 6, [[[[[[8, 32, 58]]], 76]]]]
let b = []
console.log(massive(a, b))