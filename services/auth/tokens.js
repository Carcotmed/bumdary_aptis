var jwt = require("jwt-simple");
var moment = require("moment");
const { config } = require("../../config/index");

class TokensService {

    async createToken (user) {
        var payload = {
            sub: user._id,
            iat: moment().unix(),
            exp: moment().add(14, "days").unix(),
        };

        console.log(config.tokenSecret);
        console.log(payload)

        token = jwt.encode(payload, config.tokenSecret);

        console.log(token);

        return token;
    };

}


module.exports = TokensService