const User = require('./../models/User')

class UserService {


    static create(id, username, name, bio){
        return new User(id, username, name, 'siuuu')
    }
}

module.exports = UserService