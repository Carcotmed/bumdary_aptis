const { ObjectID } = require("mongodb");
const mongoose = require("../../lib/mongoose");
const schema = new mongoose.Schema(
    {
        text: {
            desc: "The question's text",
            trim: true,
            type: String,
            index: true,
            required: true,
        },
        options: {
            desc: "The question's options",
            trim: true,
            type: [String],
            required: true,
        },
        answer: {
            desc: "The question's answer position",
            trim: true,
            type: Number,
            required: true,
        },
        ejercicio: {
            desc: "The question's exercise",
            type: ObjectID,
            required: true,
        },
    },
    {
        strict: true,
        versionKey: false,
        timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
    }
);

module.exports = mongoose.model("PreguntaGramatica", schema);
