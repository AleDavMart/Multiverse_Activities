const User = require('./User');
const Scooter = require('./Scooter');

const user2 = new User('Skyler', 18, 'zelle', 20);

//const nick = new Nick(20, '20$', 'No', 'Nick');

class ChargingStation {
	constructor(name, payment) {
		this.payment = parseInt(payment + '$/hr');
		this.name = name;
		this.scooters = { 'Scooters Available': [] };
	}

	static chargeScooter(batteryStatus) {
		while (batteryStatus === 0) {
			batteryStatus++;
			console.log(batteryStatus);
		}
		console.log('Scooter is now fully Charged!!');
		if (batteryStatus == 20) {
			console.log('this Scooter is ready for use');
		}
	}
	static markedAsReturned(returned) {
		if (returned === 'Yes' || 'yes') {
			console.log('Scooter has been returned');
		} else if (returned === 'No' || 'no') {
			console.log(`Scooter has not been returned`);
		}
	}
	addScooter(station, scooter) {
		this.scooters[station].push(scooter);
		//console.log(this.scooters);
	}
	removeScooter(station, scooter) {
		this.scooters[station].pop(scooter);
		//console.log(this.stations)}
	}
}

//console.log(ChargingStation.markedAsBroken(scooter1.maintenance));
//console.log(User.isValidPaymentType(user2.paymentType));
//console.log(ChargingStation.chargeScooter(scooter1.batteryStatus));
//console.log(ChargingStation.markedAsReturned(scooter1.returned));
//console.log(scootersAvailable(scooter1));
//let scooter1 = new Scooter(1, 10, 'Atl','no');
//let scooter1 = new Scooter(1, 10, 'Atl', 'no');
//let station3 = new ChargingStation('BlazingWheelz', 20);
//station3.addScooter('Scooters Available', scooter1);
//console.log(user2);
//console.log(station1.addScooter('Scooters Available', scooter1));

module.exports = ChargingStation;