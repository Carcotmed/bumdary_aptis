const mongoose = require("../../lib/mongoose");
const schema = new mongoose.Schema(
    {
        instrucciones: {
            desc: "The exercise's text",
            trim: true,
            type: String,
            required: true,
        },
        prompts: {
            desc: "The exercises' prompts",
            type: [String],
            required: true,
        },
        draft: {
            desc: "Wether the exercise is ready",
            type: Boolean,
            required:true,
            default: false,
        }
    },
    
    {
        strict: true,
        versionKey: false,
        timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
    }
);

module.exports = mongoose.model("EjercicioWritingText", schema);
