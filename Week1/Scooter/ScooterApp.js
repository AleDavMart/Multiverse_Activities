const City = require('./City');
const ChargingStation = require('./ChargingStation');
const Scooter = require('./Scooter');
const User = require('./User');
const { ageCheck, chargeScooter } = require('./ChargingStation');
const { warn } = require('console');

let cityAtl = new City('Atl');
let chargingstation1 = new ChargingStation('Ride With Pride', 20);
let chargingstation2 = new ChargingStation('Blazing wheelz', 20);
let scooter1 = new Scooter(1, 100, 'Atl');
let bob = new User('BobRides123', 20, 'zelle', 20, 'No');
var range = 0;

cityAtl.addChargingStation('Atl', chargingstation1);
chargingstation1.addScooter('Scooters Available', scooter1);
cityAtl.addChargingStation('Atl', chargingstation2);
//scooter1.addUser('Users renting this scooter',bob);

const downloadApp = (user) => {
	if (user === 'scooterApp') {
		user = bob;
		if (user.age >= 18) {
			scooter1.addUser('Users renting this scooter', bob);
			chargingstation1.removeScooter('Scooters Available', scooter1);
			console.log(scooter1);
			console.log(scooter1.users['Users renting this scooter'][0]);
			console.log(
				`This scooter's battery Status is ${scooter1.batteryStatus}%, and is fully charged`
			);
			function markedAsBroken(YesOrNo) {
				if (YesOrNo === 'No') {
					console.log('This scooter does not need Maintenance!!!');

					console.log(` ${bob.username} Has rented ${scooter1.number}`);

					const batteryDeplete = function () {
						while (range < 20) {
							(function (i) {
								setTimeout(function () {
									scooter1.batteryStatus =
										scooter1.batteryStatus -
										Math.trunc((scooter1.batteryStatus * 0.001) ^ 5);
									console.log(`${scooter1.number} Battery is ${scooter1.batteryStatus}% `);
								}, 600 * i);
							})(range++);
						}
					};

					if (scooter1.batteryStatus > 0) {
						batteryDeplete();
					} else if (scooter1.batteryStatus === 0) {
						console.log('Dead');
					}
				} else if (YesOrNo === 'Yes') {
					console.log(
						'Excuse Me!!!! This scooter is broken!!!! Where is the manager!! '
					);
				}

				console.log(
					'============================================================================================================='
				);
			}
			markedAsBroken(bob.needsMaintenance);
		} else {
			console.log('Beat it Kid!!!! I have a busniess to run!!!!');
		}
	}
};

console.log(downloadApp('scooterApp'));
console.log(
	`Max Range is 20 miles and battery decreases by 5% per mile driven or
	 5%/mi`
);

//  console.log(
// 		cityAtl.stations['Atl'][0].scooters['Scooters Available'][0].users[
// 			'Users renting this scooter'
// 		][0]
//  );

//console.log(scooter1);

// console.log(
// 	cityAtl.stations['Atl'][0].scooters['Scooters Available'][0].users[
// 		'Users renting this scooter'
// 	][0]
// );

/*To hire a scooter, a user must download the Electric Bike Hire app and register their details
Only users 18 years and above can ride a scooter
Scooters are rented from charging stations
There are multiple charging stations in the city
Only fully charged scooters can be rented
A scooter must be returned to a charging station
It takes 2 hours to fully charge a scooter from empty
Payment is taken once the user has returned their scooter
A scooter can be marked by a user as broken. This must remove the scooter from a list of available scooters and trigger maintenance personnel to repair the scooter
The maximum range of a fully charged scooter is 20 miles.*/

