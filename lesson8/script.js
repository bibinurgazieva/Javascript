// let c = [6, 5, 2]

// let b = []

// for (let i = 0; i < c.length; i++) {
//     let x2 = c[i] * 2
//     b.push(x2)

// }
// console.log(b) 


let m = [82, 'hello', 43, true, null]
let n = {}

for (let i = 0; i<m.length; i++) {
    let key = typeof(m[i])
    if (key in n) {
        let inside_arr = []
        inside_arr.push(n[key])
        inside_arr.push(m[i])
        n[key] = inside_arr
    } else {
        n[key] = m[i]
    }
}
console.log(n) 