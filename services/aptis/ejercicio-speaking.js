const EjercicioSpeaking = require("../../models/aptis/EjercicioSpeaking");

class EjercicioSpeakingService {
    async getAllEjerciciosSpeaking() {
        return await EjercicioSpeaking.find();
    }

    async getEjercicioSpeaking({ id }) {
        return await EjercicioSpeaking.findById(id);
    }

    async getEjerciciosSpeakingByDocumento({ id }) {
        return await EjercicioSpeaking.find({ documento: id });
    }

    async createEjercicioSpeaking({ ejercicio }) {
        const createdEjercicio = new EjercicioSpeaking(ejercicio);

        return await createdEjercicio.save();
    }

    async updateEjercicioSpeaking({ id, ejercicio } = {}) {
        return await EjercicioSpeaking.findByIdAndUpdate(id, ejercicio, {
            new: true,
        });
    }

    async deleteEjercicioSpeaking({ id }) {
        return await EjercicioSpeaking.findByIdAndRemove(id);
    }

    async deleteEjerciciosSpeakingOfExercise({ id }) {
        return await EjercicioSpeaking.deleteMany({ ejercicio: id });
    }
}

module.exports = EjercicioSpeakingService;
