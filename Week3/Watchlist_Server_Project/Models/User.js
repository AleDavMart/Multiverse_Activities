const { db, DataTypes, Model} = require ('../db')

class User extends Model{

}

User.init({
    name: DataTypes.STRING,
    watched: DataTypes.STRING // to create a list 
   
},{
    sequelize: db
})

module.exports = { User }