const mongoose = require("../../lib/mongoose");
const schema = new mongoose.Schema(
    {
        instrucciones: {
            desc: "The exercise's text",
            trim: true,
            type: String,
            required: true,
        },
        audio: {
            desc: "The exercises' audio uri",
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

module.exports = mongoose.model("EjercicioWritingText", schema);
