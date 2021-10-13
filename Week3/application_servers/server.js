//import things that are related to each together
const express = require('express')

const app = express() //creating an instance of express 
const PORT = 3000 // a port where the server will listen for anytype of interaction

//importing the seed function
const seed = require('./seed')
// start the serve, we run the seed function to generate data into our database
// 

//creating server logic and routes 

//routes
//request URL //1.absorb the request 2. response -> can be anything we want to return to the user
app.get('/', (req, res) =>{

    //request is what the  client is requesting 
    //response is what we will respond to the client with

    res.send(`<h1>HELLO WORLD!!</h1>`) // res.send is starting the method to send this message which we can use HTML

})

app.get('/test', (req, res) =>{

    //request is what the  client is requesting 
    //response is what we will respond to the client with

    res.send(`<img src="https://i.ytimg.com/vi/3oem-M2tQU4/maxresdefault.jpg">`) // res.send is starting the method to send this message which we can use HTML

})

app.get('/thoughts', (req, res) =>{

    //request is what the  client is requesting 
    //response is what we will respond to the client with

    res.send(`<h3>"“Success, after all, loves a witness, but failure can't exist without one.”
    ― Junot Díaz, The Brief Wondrous Life of Oscar Wao"<h3>`) // res.send is starting the method to send this message which we can use HTML

})

app.get('/otherpage', (req, res) =>{

    //request is what the  client is requesting 
    //response is what we will respond to the client with

    res.send(`<a href="https://www.youtube.com/watch?v=KnQ4bIvcl8E"> Laugh a little </a>`) // res.send is starting the method to send this message which we can use HTML

})


app.listen(PORT, () => { //method will listen to see if there is any interaction with our server 
    
    console.log(`Your server is now listening to port ${PORT}`)

})
