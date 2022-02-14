class car {
    constructor (mark, model, year, price) {
        this.mark = mark
        this.model = model
        this.year = year
        this.price = price
    }

    set mileage(km) {
        this._mileage = km
    }

    get mileage() {
        return this._mileage
    }

    set model (mymodel) {
        this._model = mymodel
    }

    get model () {
        return `${this.mark} ${this._model}`
    }

    go (km) {
        this.mileage += km
    }
}

let cheapCar = new car ("Honda", "Fit", 2003, 4500)
cheapCar.mileage = 200000
console.log(cheapCar.mileage)
cheapCar.go(120)
console.log(cheapCar.mileage)

let expensiveCar = new car ("Porche", "Cayenne", 2007, 40000)
expensiveCar.mileage = 12000
expensiveCar.go(300)
console.log(expensiveCar.mileage)

