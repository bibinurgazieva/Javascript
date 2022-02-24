// let a = Number(prompt())
// let res = []
// for (let i = 0; i <= a; i++) {
//     res.push(-i)


// }
// console.log(res)

class Computers {
    constructor (model, price) {
        this.model = model
        this.price = price
        this.available = true
    }

    sell () {
        this.available = false
        return this.price
    }

}

class Printers {
    constructor( model, price) {
        this.model = model
        this.price = price
        this.available = true
    }
}

class MonthBudget {
    constructor(initial, planned) {
        this.initial = initial
        this.planned = planned
        this.facted = initial
    }

    sell (myobject) {
        this.facted += myobject.sell ()
    }
}

let comp_1 = new Computers("macbook", 500)
let comp_2 = new Computers("asus", 350)
let printer_1 = new Printers ("hp", 200)

const febbudget = new MonthBudget(300, 3000)
console.log(febbudget.facted)
febbudget.sell(comp_1)
console.log(febbudget.facted)
febbudget.sell(comp_2)
console.log(febbudget.facted)

