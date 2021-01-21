const PreguntaGramatica = require("../models/aptis/PreguntaGramatica");

class PreguntaGramaticaService {
  async getAllPreguntasGramatica() {
    return await PreguntaGramatica.find();
  }

  async getPreguntasGramaticaByEjercicio({ id }) {
    return await PreguntaGramatica.find({ ejercicio: id });
  }

  async getPreguntaGramatica({ id }) {
    return await PreguntaGramatica.findById(id);
  }

  async createPreguntaGramatica({ pregunta }) {
    const createdPregunta = new PreguntaGramatica(pregunta);

    return await createdPregunta.save();
  }

  async updatePreguntaGramatica({ id, pregunta } = {}) {
    return await PreguntaGramatica.findByIdAndUpdate(id, pregunta, {
      new: true,
    });
  }

  async deletePreguntaGramatica({ id }) {
    return await PreguntaGramatica.findByIdAndRemove(id);
  }
}

module.exports = PreguntaGramaticaService;
