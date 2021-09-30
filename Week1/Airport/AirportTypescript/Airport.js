class Airport {
	constructor(name) {
		this.name = name
		this.planes = []//what would be the best datatype?
	}

	addPlane(plane) {
		this.planes.push(plane)//use an array method
	}
}


//testing 
const sanfran = new Airport('SFO')
sanfran.addPlane('Totoro')

console.log(sanfran)
console.log(sanfran.planes)


module.exports = Airport