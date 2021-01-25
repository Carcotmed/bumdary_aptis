const User = require("../../models/auth/User");

class UsersService {
    async createUser({ user }) {
        const createdUser = new User(user);
        return await createdUser.save();
    }

    async checkUser({ user }) {

        retrievedUser = await User.findOne(user);
        if (retrievedUser) {
            if (retrievedUser.authenticate(user.password)) {
                return retrievedUser;
            } else {
                return new Error("Wrong password");
            }
        } else {
            return new Error("No user found");
        }

    }
}

module.exports = UsersService;
