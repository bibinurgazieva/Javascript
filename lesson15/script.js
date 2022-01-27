let b = {
    name: "bibi",
    surname:"nurgazieva",
    id: 1108,
    fullname: function() {
        return this.name + this.surname
    },
    greeting: function (word) {
        return word + this.name
    },
    info: function() {
        return "My name is " + this.name + " my id is " + this.id
    }
}

console.log(b.name)
console.log(b.fullname()) 
console.log(b.greeting("hello"))
console.log(b.info())

