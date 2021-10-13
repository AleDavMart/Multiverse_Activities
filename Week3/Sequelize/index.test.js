//import all the stuff we just created
const { db } = require ('./db')

//import models from the file  we created our associations that now are a part of these tables (index.js)
const { Game, User} = require ('./index')

//writing a test suite 
describe('Video Game Collection Database', () => {

    //clear out database first
    //beforeAll() method will do something before runing any test

    beforeAll(async() => { // we dont know how long it will take to clear out database. 

        await db.sync({ //returns a promise and will apply something to every single model in out our database (table) 
    
        force: true // clears out all entries in all our tables in db.  
        })
    })

    //checking that we can make entries into our tables
    test('can create a game', async() =>{
        //create a row in game table 
        //.create will create an instance 
        const testGame = await Game.create({name: 'Final Fantasy', platform: 'PS1'})


        expect(testGame.name).toBe('Final Fantasy')
        expect(testGame.platform).toBe('PS1')

    })

    test('can create a user', async() =>{

        const testUser = await User.create({username: 'Aeon', gamesCollected: 'Uno,Spyro,Metroid,Farmville'})

        let games = testUser.gamesCollected.split(',').length
        
        expect(testUser.username).toBe('Aeon')
        expect(games).toBe(4)
    })

    test('Show that one user can have multiple games and its the correct association', async() => {

        const testUser22 = await User.create({username: 'Nube', gamesCollected:'Animal Crossing, Sayonara Wild Hearts'})

        const testgame1 = await Game.create({name:'Tetris', platform:'CellPhone'})
        const testgame2 = await Game.create({name:'Supercat2', platform:'CellPhone'})
        const testgame3 = await Game.create({name:'Monument Valley', platform:'CellPhone'})

        

        //magic method where we can associate data from one table to another 
        //.add_name of the table_
        await testUser22.addGame(testgame1)
        await testUser22.addGame(testgame2)
        await testUser22.addGame(testgame3)

        //magic method to retrieve all the games 
        //.get_nameofTable_(s)
        const games33 = await testUser22.getGames()//have to make it plural

        expect(games33.length).toBe(3)
    })
})