const { db, DataTypes, Model} = require ('../db')

const {User} = require ('./User')
const { Show} = require ('./Show')

Show.belongsTo(User)
User.hasMany(Show)

module.exports = { User, Show}