const mongoose = require("../../lib/mongoose");
const schema = new mongoose.Schema(
    {
        titulo_ejercicio: {
            desc: "The exercise's text",
            trim: true,
            type: String,
            required: true,
        },
        desplegable: {
            desc: "Wether the responses should be dropdowns or choices",
            type: Boolean,
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

module.exports = mongoose.model("EjercicioGramatica", schema);
