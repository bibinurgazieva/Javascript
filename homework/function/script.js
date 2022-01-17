function mymax (arr) {
    let maxnum = arr[0]

    for (let i = 0; i< arr.length; i++) {
        if ( maxnum < arr [i]) {
            maxnum = arr[i]
        }
    }
    return maxnum
}

console.log(mymax([5,8,9,12,13,54,67]))
console.log(mymax([54,67,87,-90,33,22]))
