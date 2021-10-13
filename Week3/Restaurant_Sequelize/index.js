const { Restaurant_db, DataTypes, Model} = require('./Restaurant_db')

const { Restaurant} = require ('./Models/Restaurant')
const {Menu} = require ('./Models/Menu')
const {Item} = require ('./Models/Item')

Menu.belongsTo(Restaurant)
Item.belongsTo(Menu)
Menu.hasMany(Item)
Restaurant.hasMany(Menu)

module.exports = { Restaurant, Menu, Item}