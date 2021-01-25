const mongoose = require("../../lib/mongoose");
const schema = new mongoose.Schema(
    {
        user: {
            desc: "The document this exercise belongs to",
            type: String,
            required: true,
        },
        password: {
            desc: "The exercise's text",
            trim: true,
            type: String,
            required: true,
        }
    },

    {
        strict: true,
        versionKey: false,
        timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
    }
);

/**
 * Virtuals
 */
schema.virtual('clean_password')
    .set(function(clean_password) {
        this._password = clean_password;
        this.password = this.encryptPassword(clean_password);
    })
    .get(function() {
        return this._password;
    });

schema.methods = {

    /**
     * Authenticate - check if the passwords are the same
     *
     * @param {String} plainText
     * @return {Boolean}
     * @api public
     */
    authenticate: function(plainPassword) {
        return bcrypt.compareSync(plainPassword, this.password);
    },

    /**
     * Encrypt password
     *
     * @param {String} password
     * @return {String}
     * @api public
     */
    encryptPassword: function(password) {
        if (!password)
            return '';

        return bcrypt.hashSync(password, 10);
    }
};

module.exports = mongoose.model("User", schema);
