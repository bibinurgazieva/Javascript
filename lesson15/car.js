let car = {
    type: "Honda",
    model: "Fit",
    mileage: 0,

    go: function (km) {
        this.mileage += km 
    }

}
console.log(car.mileage)
car.go(25)
console.log(car.mileage)
car.go(300)
console.log(car.mileage) 

