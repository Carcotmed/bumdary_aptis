const { ObjectID } = require("mongodb");
const mongoose = require("../../lib/mongoose");
const schema = new mongoose.Schema(
    {
        userId: {
            type: ObjectID,
            index: true,
            required: true,
        },
        cardToken: {
            trim: true,
            type: String,
            required: true,
        },
    },
    {
        strict: true,
        versionKey: false,
        timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
    }
);

module.exports = mongoose.model("Card", schema);
