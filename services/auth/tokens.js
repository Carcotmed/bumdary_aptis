var jwt = require("jwt-simple");
var moment = require("moment");
const { config } = require("../../config/index");

class TokensService {
    createToken(user) {
        var payload = {
            sub: user._id,
            iat: moment().unix(),
            exp: moment().add(14, "days").unix(),
        };

        var token = jwt.encode(payload, config.tokenSecret);

        return token;
    }
}

module.exports = TokensService;
