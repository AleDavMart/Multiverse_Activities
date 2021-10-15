// app.use(express.json()) // turns the request back into JSON from the server

const express = require ('express')

const app = express()
const PORT = 3000

const seed = require ('./seed')

const {db} = require('./db')
const {User} = require ('./Models/Index')
const {Show} = require('./Models/Index')
const {id} = require('prelude-ls') //- wtf is this?
const { post } = require('request')

seed()


//path to show all users
app.get('/users', async(req, res) => {
    let allUsers = await User.findAll()
    res.json({allUsers})
})

//path to display all shows
app.get('/shows', async(req, res) => {
    let allShows = await Show.findAll()
    res.json({allShows})
})

//allows us to attach a userid to the show


app.listen(PORT, () => {
    console.log(`Your server is now listening to port ${PORT}`)
})

