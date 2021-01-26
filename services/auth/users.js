const User = require("../../models/auth/User");

class UsersService {
    async createUser({ user }) {
        const createdUser = new User(user);
        return await createdUser.save();
    }

    async checkUser({ user }) {
        const { user: userValue, password: passwordValue } = user;

        const retrievedUser = await User.findOne({ user: userValue });

        if (retrievedUser) {
            if (await retrievedUser.comparePassword(passwordValue)) {
                return retrievedUser;
            } else {
                throw new Error("Incorrect password");
            }
        } else {
            throw new Error("No user found");
        }
    }
}

module.exports = UsersService;
