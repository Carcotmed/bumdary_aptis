const { ObjectID } = require("mongodb");
const mongoose = require("../db");
const schema = new mongoose.Schema(
    {
        text: {
            desc: "The note's content.",
            trim: true,
            type: String,
            index: true,
            required: true,
        },
        color: {
            desc: "The note's color",
            trim: true,
            type: String,
            required: true,
            select: false,
        },
    },
    {
        strict: true,
        versionKey: false,
        timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
    }
);

module.exports = mongoose.model("Users", schema);
