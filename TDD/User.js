    class User {
        constructor (username, password, email, age, favoriteTech){
            this.username = username;
            this.password = password;
            this.email = email; 
            this.age = age; 
            this.favoriteTech = []
        }
    
    checkAge(){

        let age = this.age
        if( age >= 18 && age < 75){
            return True;
        }else{
            return false; 
        }

    // (age >= 18 && age 75)  ? true :false;
    //this is another way to the age check

}

    addTech(technology) {
        this.favoriteTech.push(technology)
    }

// validateEmail(email)

    }
module.exports = User