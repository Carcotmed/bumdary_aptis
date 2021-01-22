const EjercicioWritingText = require("../../models/aptis/EjercicioWritingText");

class EjercicioWritingTextService {
    async getAllEjerciciosWritingText() {
        return await EjercicioWritingText.find();
    }

    async getEjercicioWritingText({ id }) {
        return await EjercicioWritingText.findById(id);
    }

    async getEjerciciosWritingTextByDocumento({ id }) {
        return await EjercicioWritingText.find({ documento: id });
    }

    async createEjercicioWritingText({ pregunta }) {
        const createdEjercicio = new EjercicioWritingText(pregunta);

        return await createdEjercicio.save();
    }

    async updateEjercicioWritingText({ id, pregunta } = {}) {
        return await EjercicioWritingText.findByIdAndUpdate(id, pregunta, {
            new: true,
        });
    }

    async deleteEjercicioWritingText({ id }) {
        return await EjercicioWritingText.findByIdAndRemove(id);
    }

    async deleteEjerciciosWritingTextOfExercise({ id }) {
        return await EjercicioWritingText.deleteMany({ ejercicio: id });
    }
}

module.exports = EjercicioWritingTextService;
