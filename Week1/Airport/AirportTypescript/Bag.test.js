const Bag = require('./Bag')// keep the naming consistent when requiring the class. 
//the first letter of a class is always capitalized. 

describe('Bag class', () => {
    //bag has weight
    test('bag has weight', () => {
        const testBag = new Bag (10)
        
        expect (testBag.weight).toBeGreaterThan(0)
    })
    //if bag has no weight, return error
    test('bag has no weight to return an error', () => {
        expect(() => new Bag()).toThrowError('bag needs weight')
    })
})