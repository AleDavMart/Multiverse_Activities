import fetch from 'node-fetch'

function getRandomPokemon(num){
    //  const num = Math.floor(Math.random()* inputNum);

     //console.log(num)// random number generated

     fetch(`https://pokeapi.co/api/v2/pokemon/${num}`).then((res) =>{
        return res.json()
    }).then((data)=>{
        console.log(data.name)
        return data.name
    }).catch((err)=>{
        console.error(err)
    })

    }


function catchEm(){

    console.log(`Test your luck at catching a pokemon!`)//statement read out to user 

    const masterball = Math.floor(Math.random() * 2) // will generate a 1 or 0 

    const luck = Math.floor(Math.random()* 4) // will generate a number btwn 0-3

    var totalLuck = 0;

    return new Promise((resolve, reject) =>{
       
       //going to figure out how much luck the user has and print it out
        if(luck === 0 && masterball === 0){
            totalLuck = 75;
            console.log(`Today is your lucky day! Your masterball has increased your luck! Total luck: ${totalLuck}%`)
        }else{
            totalLuck = luck * 33;
            console.log(`You have no masterball... You only have ${totalLuck}% luck`)
        }

        // going to check the value of totalLuck and decide whether a person catches a pokemon or not
        if(totalLuck > 50){
        
        const pokeNum = Math.floor(Math.random() * 899) //generate a random number to insert 
           
            resolve(pokeNum)
            

        }else{
            
            reject()
        }

    })
}

//why do I need to write it like this 
catchEm().then((pokeNum)=>{
    console.log(`You caught pokemon ${getRandomPokemon(pokeNum)}!`)
}).catch(()=>{
    console.log(`Your luck was too low.You didn't catch a pokemon`)
})

// fucntion getPokedex(getRandomPokemon(luck))