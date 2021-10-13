const {Sequelize, DataTypes, Model} = require('sequelize')

// an instance of sequelize class
const db = new Sequelize ('database', 'username', 'password',{
    dialect: 'sqlite',
    storage: './games.sqlite', // ./ means it will be at the top of our index
    logging: false //otherwise the terminal will be flooded with everything in the database
})

// export the database
module.exports = {db, DataTypes, Model}