
const User = require('./User')

//write tests in suites, each suite should test for a certain grouping

describe('User Class Datatypes', () =>{
    //username is of type string 
    test('username should be of type string', () =>{
        //create an intance of the class 
        const testUser = new User('openCohort123', 'thisPassword', 'cohort@gmaiol.com', 36)
        //expect 
        expect(testUser.username).toBe('string')
    })
    //password -string 
    test('password should be of type string', () =>{
        const testUser2 = new User('openCohort123', 'thisPassword', 'cohort@gmaiol.com', 36)
        //expect 
        expect(typeof testUser2['password']).toBe('string')
    })
})
    //email - string

    //age Test 
    test('Testing the age limit of the user', () => 
    const testUser3 = new User('openCohort123', 'thisPassword', 'cohort@gmaiol.com', 36)
    //expect
    expect(typeof testUser3['age'].toBe())
    )


    //favoriteTech check that the tech inside the array is in the array 