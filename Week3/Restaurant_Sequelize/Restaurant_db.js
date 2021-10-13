const { Sequelize, DataTypes, Model} = require('sequelize')

//creating an instance of the sequelize class

const Restaurant_db = new Sequelize('database', 'username','password',{
    dialect: 'sqlite',
    storage: './restaurant.sqlite', 
    logging: false //so it doesn't flood the terminal
})

module.exports = {Restaurant_db, DataTypes, Model}