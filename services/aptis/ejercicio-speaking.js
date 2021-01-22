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

    async createEjercicioSpeaking({ pregunta }) {
        const createdEjercicio = new EjercicioSpeaking(pregunta);

        return await createdEjercicio.save();
    }

    async updateEjercicioSpeaking({ id, pregunta } = {}) {
        return await EjercicioSpeaking.findByIdAndUpdate(id, pregunta, {
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