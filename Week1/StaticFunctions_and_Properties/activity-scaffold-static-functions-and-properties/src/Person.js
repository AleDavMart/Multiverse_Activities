class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }

    //creating a static function which will use the CLASS!! 
    static checkName(name){
        return( typeof name === 'string') ? true : false
    }

    //checking to see if the name provided is a string
    isString(){
        return( typeof this.name === 'string') ? true : false
    }
}

const ale = new Person ('Ale', 26)
const leyla = new Person ('Leyla', 1)

//testing that this works
console.log(leyla);
console.log(ale);

//testing if the name is a string 
console.log(ale.isString())
//each time we want to check if a name is a string we have to create a new object instance 


//we can use static so we don't have to do this everytime
//testing the static function 
console.log(Person.checkName('Kitty'))// we are calling the class instead of an instance
//this is a more direct way of checking