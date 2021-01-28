const mongoose = require("../../lib/mongoose");
const { ObjectID } = require("mongodb");

const categoriaId = "";
const schema = new mongoose.Schema(
    {
        categoria: {
            desc: "The document this exercise belongs to",
            type: ObjectID,
            required: true,
            default: categoriaId
        },
        documento: {
            desc: "The document this exercise belongs to",
            type: ObjectID,
            required: true,
        },
        instrucciones: {
            desc: "The exercise's text",
            trim: true,
            type: String,
            required: true,
        },
        image: {
            desc: "The exercises' image uri",
            type: String,
            required: false,
        },
        draft: {
            desc: "Wether the exercise is ready",
            type: Boolean,
            required: true,
            default: false,
        },
    },

    {
        strict: true,
        versionKey: false,
        timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
    }
);

module.exports = mongoose.model("EjercicioSpeaking", schema);
