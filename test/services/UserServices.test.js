const UserService = require('./../../app/services/UserServices')

describe('Tests para class UserService',() =>{
    test('',() =>{
        const user1 = UserService.create(1,'ulis','ulises')

        expect(user1.id).toBe(1)
        expect(user1.username).toBe('ulis')
        expect(user1.name).toBe('ulises')
    })
})