const User = require('./../../app/models/User')

describe('Test para class User',() => {
    test('Probando creacion de un objeto de la clase user',() => {
        const user = new User(1,'Ulisesssss','Ulises','bio')
        
        expect(user.id).toBe(1)
        expect(user.username).toBe('Ulisesssss')
        expect(user.name).toBe('Ulises')
        expect(user.bio).toBe('bio')
    })

    test('dataCreated y lastUpdated tipo fecha',() => {
        const user = new User(1,'Ulisesssss','Ulises','bio')
        
        expect(user.id).toBe(1)
        expect(user.username).toBe('Ulisesssss')
        expect(user.name).toBe('Ulises')
        expect(user.bio).toBe('bio')
        expect(user.dataCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    })

    test('probando los getters',() => {
        const user = new User(1,'Ulisesss','Ulises','bio')
        
        expect(user.getUsername).toBe('Ulisesss')
        expect(user.getBio).toBe('bio')
        expect(user.getDataCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    })

    test('probando setters',() =>{
        const user = new User(1,'Ulisesss','Ulises','bio')
        user.setUsername = ('Fidelito')
        user.setBio = 'biooo'

        expect(user.username).toBe('Fidelito')
        expect(user.bio).toBe('biooo')
    })
})