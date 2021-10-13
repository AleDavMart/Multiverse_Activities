// import database and 
const {db, DataTypes, Model} = require('../db') // require database, datatype from our file NOT from sqlite

//creates a class User which inherits properties from Model 
class User extends Model {

}

//We create specifics of our class 
User.init({  //.init allows us to create columns for our table

    username: DataTypes.STRING,
    gamesCollected: DataTypes.STRING
    
    },{
        sequelize: db // going to specify where to store 
})

module.exports = {User}