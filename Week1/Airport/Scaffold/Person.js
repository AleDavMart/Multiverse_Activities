class Person {
    constructor(name, passportNumber, seatNumber, bags) {
        this.name = name
        this.passportNumber = passportNumber
        this.seatNumber = seatNumber
        this.bags = []
    }

    //include an addBag method
    addBag(bag){
        this.bags.push(bag)
    }
}

module.exports = Person