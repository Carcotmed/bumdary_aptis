const mongoose = require("../../lib/mongoose");
const { ObjectID } = require("mongodb");
const schema = new mongoose.Schema(
    {
        documento: {
            desc: "The document this exercise belongs to",
            type: ObjectID,
            required: true,
        },
        titulo_ejercicio: {
            desc: "The exercise's text",
            trim: true,
            type: String,
            required: true,
        },
        instrucciones: {
            desc: "The exercise's instructions",
            trim: true,
            type: String,
            required: true,
        },
        parrafos: {
            desc: "The exercise's text by paragraphs",
            trim: true,
            type: [String],
            required: true,
        },
        cabeceras: {
            desc: "The exercise's paragraphs' headers",
            type: [String],
            required: true,
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

module.exports = mongoose.model("EjercicioComprensionL", schema);
