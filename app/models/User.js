class User {
    constructor(id, username, name, bio){
        this.id = id
        this.username = username
        this.name = name
        this.bio = bio
        this.dataCreated = new Date()
        this.lastUpdated = new Date()
    }
    get getUsername(){
        return this.username
    }
    get getBio(){
        return this.bio
    }
    get getDataCreated(){
        return new Date()
    }
    get getLastUpdated(){
        return new Date()
    }
    set setUsername(newUsername){
        this.username = newUsername
    }
    set setBio(newBio){
        this.bio = newBio
    }
}

module.exports = User