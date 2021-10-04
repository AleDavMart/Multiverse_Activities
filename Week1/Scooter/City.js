const ChargingStation = require('./ChargingStation');
const Scooter = require('./Scooter')
const User = require('./User')





class City {
	constructor(name) {
		this.name = name
		this.stations = { 'Atl': [], 'Dallas': [] };
	}
	addChargingStation(city,station) {
		this.stations[city].push(station)
        
	}
}

//let user1 = new User("ScooterRider123",18,"zelle",20)
//let scooter1 = new Scooter(1, 10, 'Atl', 'no');
//let scooter2 = new Scooter(2,20,'Atl','no')
//let newCity = new City('Atl');
//let station3 =new ChargingStation('BlazingWheelz', 20)



/*newCity.addChargingStation('Atl',station3)
station3.addScooter('Scooters Available',scooter1);
station3.addScooter('Scooters Available',scooter2);
scooter1.addUser('Users renting this scooter',user1);
console.log(station3.scooters.users);*/
module.exports = City;
// const newCity = new City('SF')

// newCity.ChargingStation('SFO')
// newCity.ChargingStation('Oakland')
// newCity.ChargingStation('San Leandro')
// newCity.ChargingStation('Palo Alto')
// newCity.ChargingStation('Redwood City')

// const newCity2 = new City('Tamalpais')

// newCity2.ChargingStation('Stinson Beach')
// newCity2.ChargingStation('Tamalpais Campground')

// console.log(newCity)
// console.log(newCity2)