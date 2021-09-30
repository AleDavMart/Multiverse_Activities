

class Pokemon {
    //reveal this last
    static pokemons = []
  
    constructor(name, number, type, hp){
      this.name = name
      this.number = number
      this.type = type
      this.hp = hp
    }
  
    static nameIsString(name) {
      return typeof name === 'string' ? true: false 
    }
  
    static numberIsTypeNumber(number) {
      return ( typeof number === 'integer') ? true : false

    }
  
    static isValidType(type) {
      const elements = ['fire', 'fairy', 'grass', 'earth', 'lightning', 'ghost', 'water', 'poison', 'flying'] //what can we put inside of this array?
      //What kind of array method can we use to check if the type is an element?
      return ( elements.includes(type))

    }
  
    static isValidHp(hp) {
      return (hp >= 50 && hp <= 250) ? true : false
    }
  
  
    //what kind of argument should be passed into this method?
    assignType() {
      this.type = type
    }

    update(){
        return `${this.name}`
    }
    }

    class Fearow extends Pokemon{
        constructor(name,number, type, hp){
            super(name,number, type, hp)
        
        }
        drillPeck(pokemon){//function for specific pokemon attack 
            let attackVal = Math.floor(Math.Random()*70) // value of attack will be 0-70 HP 
            
            setTimeout(() => {
                `${this.name} used Drill Peck!`
                pokemon.hp =pokemon.hp  - attackVal
                console.log(pokemon.hp)
            }, 500)
        }


    }
   
class Goldluck extends Pokemon{
    constructor(name, number, type, hp){
        super(name,number, type,hp)   
    }
    Psybeam(pokemon){
        let attackVal = Math.floor(Math.Random()*20)// value of attack will be from 0 -20

        setTimeout(() =>{
            `${this.name} used Psy Beam!`
            pokemon.hp = pokemon.hp - attackVal
            console.log(pokemon.hp)
        }, 500)
    }
    Surf(pokemon){
        let attackVal = Math.floor(Math.random()*70)//attach value ranges from 0 -70

        setTimeout(() =>{
            `${this.name} used Surf!`
            pokemon.hp = pokemon.hp - attackVal
            console.log(pokemon.hp)
        }, 500)
    }
}

const goldluck = new Goldluck ('Goldluck', 55, 'water', 120)
const fearow = new Fearow('Fearow', 22,'flying', 90)



console.log(goldluck)
console.log(fearow)