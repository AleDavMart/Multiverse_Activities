//imports
const {db, DataTypes, Model } = require ('../db')

//associations
const { User} = require ('./User')
const { Music} = require ('./Music')

//export
Music.belongsTo(User)
User.hasMany(Music)


module.exports = { User, Music}