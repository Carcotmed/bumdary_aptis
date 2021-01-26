const EjercicioChoices = require("../../models/aptis/EjercicioChoices");
const PreguntaChoicesService = require("./pregunta-choices");

class EjercicioChoicesService {
    preguntaChoicesService = new PreguntaChoicesService();

    async getAllEjerciciosChoices() {
        return await EjercicioChoices.find();
    }

    async getEjercicioChoices({ id }) {
        return await EjercicioChoices.findById(id);
    }

    async getEjerciciosChoicesByDocumento({ id }) {
        return await EjercicioChoices.find({ documento: id });
    }

    async createEjercicioChoices({ ejercicio }) {
        const createdEjercicio = new EjercicioChoices(ejercicio);
        return await createdEjercicio.save();
    }

    async updateEjercicioChoices({ id, ejercicio } = {}) {
        return await EjercicioChoices.findByIdAndUpdate(id, ejercicio, {
            new: true,
        });
    }

    async deleteEjercicioChoices({ id }) {
        this.preguntaChoicesService.deletePreguntasChoicesOfExercise({ id });
        return await EjercicioChoices.findByIdAndRemove(id);
    }
}

module.exports = EjercicioChoicesService;
