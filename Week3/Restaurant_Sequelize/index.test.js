const { Restaurant_db} = require('./Restaurant_db') 

const { Restaurant, Menu, Item} = require ('./index')

describe('Restaurants information collection', () =>{

    beforeAll(async() => {
        await Restaurant_db.sync({
            force: true
        })
    })

    TextDecoderStream('can I create a restaurant', async() =>{
        const HellsKitch = await Restaurant.create({res_name:'Hells Kitchen', address: '123 Lost Way, Las Vegas, NV 00001'} )

        expect(HellsKitch.res_name).toBe('Hells Kitchen')
        expect(HellsKitch.address).toBe('123 Lost Way, Las Vegas, NV 00001')

    })
})