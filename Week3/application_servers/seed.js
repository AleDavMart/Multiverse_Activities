//import my dependencis 
const path = require('path') // node module that helps us find our file easily
const fs = require('fs').promises // allows us to use promises when we try to seed our data into our database

//import our database 
//import the model that we are trying to import our data into 
const {db} = require('./db')
const {Music} = require('./models/index.js')
const {User} = require('./models/index.js')

//write our seed function -> take our music.json file and create rows in our database
const seed = async() => {

await db.sync({force:true}); // clear out the database + tables

const seedPath = path.join(__dirname,'music.json'); //get the path to music.json file
const user_seedPath = path.join(__dirname, 'user.json');

const buffer1 = await fs.readFile(user_seedPath);
const buffer = await fs.readFile(seedPath); //buffer b/c fs doesn't know what data it's reading
//create a function to have it read  which JSON path it will reach 
const {user_data} = JSON.parse(String(buffer1));
const {data} = JSON.parse(String(buffer)); //First we convert the data from buffer into a string, then we parse the JSON so it converts from string to object. 

const userPromises = user_data.map(user => User.create(user));
await Promise.all(userPromises);

const musicPromises = data.map(music => Music.create(music)); // creates music and puts it into our Music table
await Promise.all(musicPromises); 


// The promise.all() method takes an iterable of promises as an input, and returns
//a single promise that resolves to an array of the results of the input promises
console.log('db populated!')



}

//export my seed function
module.exports = seed;