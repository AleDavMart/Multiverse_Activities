//import things that are related to each together
const express = require('express')

const app = express() //creating an instance of express 
const PORT = 3000 // a port where the server will listen for anytype of interaction

//importing the seed function
const seed = require('./seed')
// start the serve, we run the seed function to generate data into our database

const {db} = require('./db')// import our db
const { Music} = require ('./models/index')// import our associated model
const {User} = require('./models/index')
const { id } = require('prelude-ls')
// want to invoke seed function first because 
seed()

//------------------ROUTES------------------
//creating an effective way to seeding routes in express

app.get('/allUsers',async (req, res) =>{ //the route for the browser is defined in the first param
   
    let UserInfo = await User.findAll()//equivalent to sqlite3 : SELECT* FROM User
    res.json({UserInfo})
   // res.json(await Music.findAll()) //it works ---idk why we cant do this 
})

// app.get('/allMusic',async (req, res) =>{ //the route for the browser is defined in the first param
   
//     let allSongs = await Music.findAll()//equivalent to sqlite3 : SELECT* FROM MUSIC
//     res.json({allSongs})
//    // res.json(await Music.findAll()) //it works ---idk why we cant do this 
// })

app.post('/music',async (req, res) =>{ //the route for the browser is defined in the first param
    await Music.create({"name":'newSong321', "genre": 'techno'})//equivalent to sqlite3 : SELECT* FROM MUSIC
     // res.json(await Music.findAll()) //it works ---idk why we cant do this 
})

app.get('/music', async(req, res) => {
    let allSongs = await Music.findAll()
    res.json({allSongs})
})

app.get('/music/:id', async(req, res) => {
    let id = req.params.id
    let onesong = await Music.findByPk(id)
    res.json({onesong})
})

app.get('/music/:id', async(req, res) => {
    let id = req.params.id
    let onesong = await Music.findByPk(id)
    onesong.UserId = ''
    res.json({onesong})
})

// app.put('/music/:id', async(req, res) => { //going to grab anything after the colon
//     let id = req.params(id) //capturing the id by storing it in a variable
//     //find the row first before updating 
//     let songToUpdate = await Music.findByPk(id)
//     await Music.update(songToUpdate, {}) // first param is the song and second one is the update

// })


app.delete('/music/:id', async(req, res) => {
  //where helps us filter which column we are trying to identify
    await Music.destroy({
    where: {id: req.params.id }
})
    resp.send('song deleted')
})


app.listen(PORT, () => { //method will listen to see if there is any interaction with our server 
    
    console.log(`Your server is now listening to port ${PORT}`)

})






// //routes
// //request URL //1.absorb the request 2. response -> can be anything we want to return to the user
// app.get('/', (req, res) =>{

//     //request is what the  client is requesting 
//     //response is what we will respond to the client with

//     res.send(`<h1>HELLO WORLD!!</h1>`) // res.send is starting the method to send this message which we can use HTML

// })

// app.get('/test', (req, res) =>{

//     //request is what the  client is requesting 
//     //response is what we will respond to the client with

//     res.send(`<img src="https://i.ytimg.com/vi/3oem-M2tQU4/maxresdefault.jpg">`) // res.send is starting the method to send this message which we can use HTML

// })

// app.get('/thoughts', (req, res) =>{

//     //request is what the  client is requesting 
//     //response is what we will respond to the client with

//     res.send(`<h3>"“Success, after all, loves a witness, but failure can't exist without one.”
//     ― Junot Díaz, The Brief Wondrous Life of Oscar Wao"<h3>`) // res.send is starting the method to send this message which we can use HTML

// })

// app.get('/otherpage', (req, res) =>{

//     //request is what the  client is requesting 
//     //response is what we will respond to the client with

//     res.send(`<a href="https://www.youtube.com/watch?v=KnQ4bIvcl8E"> Laugh a little </a>`) // res.send is starting the method to send this message which we can use HTML

// })

