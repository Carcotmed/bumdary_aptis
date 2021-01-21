const mongoose = require("../../lib/mongoose");
const schema = new mongoose.Schema(
  {
    titulo_ejercicio: {
      desc: "The exercise's text",
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

module.exports = mongoose.model("EjercicioGramatica", schema);
