// import our database, datatypes, Model, and our specific models created
const { db, DataTypes, Model } = require ('./db')

//import our files
const { Game } = require ('./Models/Game')
const { User } = require ('./Models/User')

//associations - relationship btwn tables 
//.belongsTo
//.hasMany
Game.belongsTo(User)// creates a foreing key on the game table that indicates the associated user 
User.hasMany(Game)

//export the models with these associations
module.exports = { Game, User}