const EjercicioListening = require("../../models/aptis/EjercicioListening");

class EjercicioListeningService {
    async getAllEjerciciosListening() {
        return await EjercicioListening.find();
    }

    async getEjercicioListening({ id }) {
        return await EjercicioListening.findById(id);
    }

    async getEjerciciosListeningByDocumento({ id }) {
        return await EjercicioListening.find({ documento: id });
    }

    async createEjercicioListening({ ejercicio }) {
        const createdEjercicio = new EjercicioListening(ejercicio);

        return await createdEjercicio.save();
    }

    async updateEjercicioListening({ id, ejercicio } = {}) {
        return await EjercicioListening.findByIdAndUpdate(id, ejercicio, {
            new: true,
        });
    }

    async deleteEjercicioListening({ id }) {
        return await EjercicioListening.findByIdAndRemove(id);
    }

    async deleteEjerciciosListeningOfExercise({ id }) {
        return await EjercicioListening.deleteMany({ ejercicio: id });
    }
}

module.exports = EjercicioListeningService;
