//importing database, datatype, and Model
const { DataTypes, Model, Restaurant_db} = require ('../Restaurant_db')

class Restaurant extends Model{

}

Restaurant.init({
    res_name: DataTypes.String,
    address: DataTypes.String
},{
    sequelize: Restaurant_db
})

module.exports = { Restaurant}