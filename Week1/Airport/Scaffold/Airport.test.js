	const Airport = require('./Airport')
	const Plane = require('./Plane')
	const Bag = require('./Bag')
	const Person = require('./Person')


	describe('Airport Contains the information of the current airport and the planes inside' , () => {


		
		test('airport has a name', () => {
			const test1 = new Airport('San Jose')

			expect(typeof Airport.name).toBe('string')
		})

		test('airport has planes', () => {
			let airport2= new Airport('Oakland')
			if(!airport2.planes){
				throw new Error ('Airport has no planes')
			}
		})


		test('airport can add planes', () => {
			let airport55 = new Airport ('SF')
			airport55.addPlane('Boeing 747')
			expect(airport55.planes.length).toBe(1)
		})

		test('airport can have planes with passengers with bags', () => {
			const testPerson = new Person( 'Ale', 122345, 14)
			const plane2 = new Plane('Avion')
			const testBag = new Bag(4)
			const airport5 = new Airport('San Francisco')

			airport5.addPlane(plane2)
			plane2.addPassenger(testPerson)
			testPerson.addBag(testBag)

			expect(airport5.planes.length).toBe(1)
			expect(plane2.passengers.length).toBe(1)
			expect(testPerson.bags.length).toBe(1)
		})
	})
