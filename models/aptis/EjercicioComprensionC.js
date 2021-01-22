const mongoose = require("../../lib/mongoose");
const schema = new mongoose.Schema(
    {
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
        texto: {
            desc: "The exercise's text",
            trim: true,
            type: String,
            required: true,
        },
        palabras: {
            desc: "The exercise's correctly-ordered words",
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

module.exports = mongoose.model("EjercicioComprensionC", schema);
