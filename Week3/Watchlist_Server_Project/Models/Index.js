const { db, DataTypes, Model} = require ('../db')

const {User} = require ('./User')
const { Show} = require ('./Show')


User.hasMany(Show)
Show.belongsTo(User)


module.exports = { User, Show}