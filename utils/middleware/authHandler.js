var jwt = require("jwt-simple");
var moment = require("moment");
var { config } = require("../../config/index");

function ensureAuthenticated(req, res, next) {
    try {
        const { authorization: token } = req.headers;

        if (!token || token == "{{auth_token}}") {
            return res.status(403).send({
                message: "Tu petición no tiene cabecera de autorización",
            });
        }

        var payload = jwt.decode(token, config.tokenSecret);

        if (payload.exp <= moment().unix()) {
            return res.status(401).send({ message: "El token ha expirado" });
        }

        req.user = payload.sub;
        next();
    } catch (error) {
        next(error);
    }
}

module.exports = { ensureAuthenticated };
