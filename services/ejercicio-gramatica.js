const EjercicioGramatica = require("../models/aptis/EjercicioGramatica");

class EjercicioGramaticaService {
  async getAllEjerciciosGramatica() {
    return await EjercicioGramatica.find();
  }

  async getEjercicioGramatica({ id }) {
    return await EjercicioGramatica.findById(id);
  }

  async createEjercicioGramatica({ ejercicio }) {
    const createdEjercicio = new EjercicioGramatica(ejercicio);

    return await createdEjercicio.save();
  }

  async updateEjercicioGramatica({ id, ejercicio } = {}) {
    return await EjercicioGramatica.findByIdAndUpdate(id, ejercicio, {
      new: true,
    });
  }

  async deleteEjercicioGramatica({ id }) {
    return await EjercicioGramatica.findByIdAndRemove(id);
  }
}

module.exports = EjercicioGramaticaService;
