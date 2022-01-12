let m = [
    [' ', ' ', ' ', ' ', ' ', ' ', ],
    [' ', ' ', ' ', ' ', ' ', ' ', ],
    [' ', ' ', ' ', ' ', ' ', ' ', ],
    [' ', ' ', ' ', ' ', ' ', ' ', ],
    [' ', ' ', ' ', ' ', ' ', ' ', ],
    [' ', ' ', ' ', ' ', ' ', ' ', ],
    
]

for (let i = 0; i < m.length; i++) {
    m[i] [0] = "*"
}
for (let j = 0; j < 4; j++) {
    m[j] [j] = "*"
}
for (let k = 0; k < 4; k++) {
    m[k] [m.length-k] = "*"
}
for (let l = 0; l < m.length; l++) {
    m[l] [m.length] = "*"
}
for (let n = 0; n < m.length; n++) {
    let output = ''
    for ( let o = 0; o < m[n].length; o++) {
        output += m[n][o]
    }
    console.log(output)
}