const path = require ('path')
const fs = require ('fs').promises

const { db} = require ('./db')
const { User} = require ('./Models/Index')
const { Show} = require ('./Models/Index')

const seed = async () => {
 
    await db.sync({force:true}) //clears out the database 

    const seedPath = path.join (__dirname, 'User.json')
    const show_seedPath = path.join( __dirname, 'show.json')

    const userBuffer = await fs.readFile(seedPath)
    const showBuffer = await fs.readFile(show_seedPath)

    const {user_data} = JSON.parse(String(userBuffer))
    const {data} = JSON.parse(String(showBuffer))

    const userPromises = user_data.map( user => User.create(user))
    await Promise.all(userPromises)

    const showPromises = data.map( show => Show.create(show))
    await Promise.all(showPromises)

    console.log('db populated!')
}

module.exports = seed;
