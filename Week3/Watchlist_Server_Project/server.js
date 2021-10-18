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
const { templateSettings } = require('lodash')



app.use(express.json());

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

//allows us to get a single user id 
// app.get("/user/:id", (req, res, next) => {
//     let singleUser = "select * from user where id = ?"
//     var id = [req.singleUser.id]
//     db.get(singleUser, id, (err, row) => {
//         if (err) {
//           res.status(400).json({"error":err.message});
//           return;
//         }
//         res.json({
//             "message":"success",
//             "user_data":row
//         })
//       });
// });

// route that will update a show by PK
app.put('/show/:id', async( req, res) => {
    let id = req.params.id
    let updateShow = await Show.findByPk(id)
    await updateShow.update()
    res.send(' show has been updated')
})

//route that will create a show 
app.post('/show/create', async(req, res) =>{

    let {name, genre, seasons, rating, UserId} = req.body

    await Show.create({
        name, genre, seasons, rating, UserId
    })

    res.send(`Show has been added ${name}`)
})

app.listen(PORT, () => {
    console.log(`Your server is now listening to port ${PORT}`)
})

