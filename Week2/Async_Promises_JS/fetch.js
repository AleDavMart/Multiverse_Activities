import fetch from 'node-fetch'

// //syntax example
// fetch('API link here').then{
//     function(value){},
//     function(error){}
// }

fetch('https://pokeapi.co/api/v2/pokemon/pikachu').then((res)=>{

//cant iterate through a JSON object like a javascript object 
    return res.json()

}).then((data)=>{
 //returns the name of the pokemon
 return data.form

}).then((data)=>{
    console.log(data.name)
    return data.name

}).catch(()=>{
    console.log('pokemon not found')
})

