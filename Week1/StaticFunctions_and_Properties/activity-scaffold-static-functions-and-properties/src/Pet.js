class Pet{
    constructor(name,type, gender){
        this.name = gender === "male"? 
        'King-' + name[0].toUpperCase() + name.slice(1) : 
        'Queen-'+ name[0].toUpperCase() + name.slice(1)
        this.type = type
        this.gender = gender
    }

    //need to add if the pet is either a dog, cat, bird, fish
    static checkType(type){
        return Pet.type
    }

    //another way to check type of pet that is valid with the forms we have 
    static checkType2(type){
        const validTypes = ['cat', 'dog', 'fish', 'bird']
        return (validTypes.includes(type)) ? true : false // can also remove the ? true:false and will return a false if negavtive.
    }
    //checking to see if the prefix is attached to the name and that it is capitalized
    static checkName(name){
        return Pet.name
    }

    //another way to check name requirements
    static checkName2(name){
        //King-Baguette 

        const idxOfDash = name.indexOf('-')// captures the index of where the dash is located at in the name 
        
        const prefix = name.slice(0, idxOfDash + 1)// this will stop at index of 5 but will not include the B
        
        let prefixCheck; // will re-assign it to the value of true or false
        
        let firstLetterOfName = name[idxOfDash + 1] === name[idxOfDash + 1].toUpperCase // is the name the same as capitalizing the first letter of the name after the prefix
        //ex. baguette != Baguette 
        //ex. B === B true
        
        if( prefix === 'King-' || prefix === 'Queen-'){
            prefixCheck = true
        }else{
            prefixCheck = false
        }

        if(prefixCheck && firstLetterOfName){
            return true
        }else{
            return false
        }
    }
}

let tuna = new Pet ('tuna', 'cat', 'female')
let pheonix = new Pet('pheonix', 'turtle', 'male')

console.log(tuna)

//checking to see if the checkType static function works 
console.log(Pet.checkType(tuna))

//checking to see if the check static function works
console.log(Pet.checkName(tuna))

//checking that the other type validation works 
console.log(Pet.checkType2(pheonix))

//checking if a pet is included in the list of types without creating an instance
console.log(Pet.checkType2('turtle'))//returns false

console.log(Pet.checkType2('cat'))//returns true

//