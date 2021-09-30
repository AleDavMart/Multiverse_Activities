const Bag = require('./Bag') //importing this class so we can create an instance of this object
const Person = require('./Person')

describe('Person class', () => {


    test('Person has name', () => {
        const person12 = new Person('Kitty')

    expect(person12.name.length).toBeGreaterThan(1) // fails the test because there is no name entered
    expect(typeof person12.name).toBe('string')// checks if the persons name is a string and not a number
    })

    test('Person has bag', () =>{
        const person44 = new Person( 'Plant', 1234, 122)
        person44.addBag(10)
    
        expect(person44.bags.length).toBe(1) 
    
    })
})