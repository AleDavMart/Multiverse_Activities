// //create my promise 
// let myPromise = new Promise((resolve, reject) => {
    
//     const randomNum = Math.floor(Math.random()*2)

//     if(randomNum === 1){
//         resolve(randomNum)
//     }else{
//         reject(randomNum)
//     }
// })

// // chain callbacks to our promise 
// //.then <-- resolved ( randomNum === 1)
// //.catch  <--- reject 

// myPromise.then((num) => {
//     console.log("I will be attending the party : ", num)
// }).catch((num) =>{
// console.log("I will be absent from the event. : ", num)
// })

//Example: 
//Find a User
let users = {
    'openCohort': 'abc123',
    'coachTony' : 'hellogoodBye123',
    'tiny321' : 'pikachu456'
}

function findUser(username, password){

    console.log(`You entered the username: ${username}, ${password}`)
    console.log(` While you wait until your account is verified, please stay on the line`)

    //asynchronous task
    return new Promise ((resolve, reject) => {
        if(users[username] && users[username] === password){
            resolve(`${username}, ${password}`)
        }else{
            reject()
        }
    })
    
}

//invoked the function
findUser('openCohort', 'abc123').then((user) =>{
    console.log(`Username: ${user} has been found!`)
}).catch(() => {
    console.log(`User not found`)
})