class Scooter {
	constructor(number, batteryStatus, location) {
		this.number = 'RocketPower' + number; // creates a naming sequence for the scooters
		this.batteryStatus = batteryStatus; // how much battery each
		this.location = location; // which charging station its located at
		
		this.users ={'Users renting this scooter':[]}
	}
	static mileRange(scooter) {
		const Range = Scooter.batteryStatus * 0.2; // each mile percentage is equal .20 miles
		if (scooter.batteryStatus != 100) {
			return `${scooter.number} cannot be rented`;
		} else {
			return `This ${Scooter.number} has this ${Range} miles left`;
		}
	}
	addUser(user, scooter) {
this.users[user].push(scooter)
//console.log(this.users);
	}
	removeUser(user,scooter){
		this.users[user].pop(scooter);
	}
}
class RocketPower extends Scooter {
	constructor(number, batteryStatus, location, maintenance, speed) {
		super(number, batteryStatus, location, maintenance);
		this.speed = speed; // assigns the speed of the scooter
	}

	assignColor(color) {
		this.color = color;
		return `${Scooter.number} is this ${Scooter.color}`; // should return scooter name and color
	}
	static locationStatus(currentLocation) {
		if (currentLocation != stations) {
			// should check that the scooters current is at the charging station
			return `${Scooter.number} is unavailable`;
		} else {
			//push this scooter to its respective station and make it avaialable to charge/checkout
		}
	}
	
}
module.exports = Scooter;