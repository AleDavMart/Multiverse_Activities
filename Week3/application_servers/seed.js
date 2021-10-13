//import my dependencis 
const path = require('path') // node module that helps us find our file easily
const fs = require('fs').promises // allows us to use promises when we try to seed our data into our database

//import our database 
//import the model that we are trying to import our data into 
const {db} = require('./db')
const {Music} = require('./models/index.js')

//write our seed function -> take our music.json file and create rows in our database
const seed = async() => {

}

//export my seed function
module.exports = {seed}