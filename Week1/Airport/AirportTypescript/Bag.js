class Bag {
    constructor(weight) {
        if(!weight){//if there is no weight it will return the following error
            throw new Error('bag needs weight')
        } 
        this.weight = weight
    }
}

module.exports = Bag