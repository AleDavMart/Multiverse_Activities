// import database and 
const {db, DataTypes, Model} = require('../db') // require database, datatype from our file NOT from sqlite

//creates a class Game which inherits properties from Model 
class Game extends Model {

}

//We create specifics of our class 
Game.init({  //.init allows us to create columns for our table
    name: DataTypes.STRING,
    platform: DataTypes.STRING
},{
    sequelize: db // going to specify where to store 
}
)

module.exports = {Game}