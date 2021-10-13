const {DataTypes, Model, Restaurant_db} = require('../Restaurant_db')

//an instance of sequelize class
class Menu extends Model{

}

Menu.init({
    menu_name: DataTypes.STRING,
    },{
    sequelize: Restaurant_db
}
)

module.exports = { Menu}
