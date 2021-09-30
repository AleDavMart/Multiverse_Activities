
//needs to show a map of where the stations are located

class City{

    constructor(name){
        this.name = name 
        this.stations = []
    }
    
    ChargingStation(station) {
         this.stations.push(station)
        
    }
}

const newCity = new City('SF')

newCity.ChargingStation('SFO')
newCity.ChargingStation('Oakland')
newCity.ChargingStation('San Leandro')
newCity.ChargingStation('Palo Alto')
newCity.ChargingStation('Redwood City')

const newCity2 = new City('Tamalpais')

newCity2.ChargingStation('Stinson Beach')
newCity2.ChargingStation('Tamalpais Campground')

console.log(newCity)
console.log(newCity2)