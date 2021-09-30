// //In a new replit node.js file, write a class called Pokemon

// 2)  The constructor should have  name, number, type, hp, properties in the constructor.

// 3) Write some useful static methods!


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
      const elements = ['fire', 'fairy', 'grass', 'earth', 'lightning', 'ghost', 'water', 'poison'] //what can we put inside of this array?
      //What kind of array method can we use to check if the type is an element?
      return ( elements.includes(type))

    }
  
    static isValidHp(hp) {
      (hp >= 50 && hp <= 250) ? true : false
    }
  
  
    //what kind of argument should be passed into this method?
    assignType() {
      this.type = type
    }
  
  }

  //example 
  const NewPokemon = new Pokemon ( 'Pikachu', 25, lightning, 200)

  NewPokemon.checkName(NewPokemon.name)


