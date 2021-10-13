const { Restaurant_db, DataTypes, Model} = require("../Restauran_db")

class Item extends Model{

}

Item.init({
    item_name: DataTypes.STRING,
    // item_description: DataTypes.STRING,
    price: DataTypes.INTEGER
},{
    sequelize: Restaurant_db
})

module.exports = {Item}