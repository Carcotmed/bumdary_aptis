const express = require("express");
const TokensService = require("../services/auth/tokens");
const UsersService = require("../services/auth/users");

const usersService = new UsersService();
const tokensService = new TokensService();

const router = express.Router();

//SignUp
router.post("/signup", async function (req, res, next) {

    try {
        const { body: user } = req;
        const createdUser = await usersService.createUser({ user });
        const createdToken = await tokensService.createToken(createdUser);

        res.status(200).json({
            data: createdUser,
            message: "usuario created",
            token: createdToken
        });
    } catch (err) {
        next(err);
    }

});

//Login
router.post("/login", async function (req, res, next) {

    try {
        const { body: user } = req;
        const retrievedUser = await usersService.checkUser(
            { user }
        );
        const createdToken = await tokensService.createToken(retrievedUser);

        res.status(200).json({
            message: "user retrieved",
            token: createdToken
        });
    } catch (err) {
        next(err);
    }
    
});

function authRoutes(app) {
    app.use("/auth", router);
}

module.exports = authRoutes;