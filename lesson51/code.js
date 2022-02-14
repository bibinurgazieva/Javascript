class awesomeclass {
    constructor (height, price) {
        this.height = height
        this.price = price
    }
    test () {
        console.log("hi")
    }
}

let myobject = new awesomeclass (8, 34)
myobject.test ()
console.log(myobject.price)

let anotherobject = new awesomeclass ()
anotherobject.test() 
console.log(anotherobject.price)