console.log(myfactorial(6))

function myfactorial (n) {
    if (n <= 1) {
        return 1
    }
    else return myfactorial (n-1) * myfactorial (n-2)
}