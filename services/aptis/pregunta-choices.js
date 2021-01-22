const PreguntaChoices = require("../../models/aptis/PreguntaChoices");

class PreguntaChoicesService {
    async getAllPreguntasChoices() {
        return await PreguntaChoices.find();
    }

    async getPreguntasChoicesByEjercicio({ id }) {
        return await PreguntaChoices.find({ ejercicio: id });
    }

    async getPreguntaChoices({ id }) {
        return await PreguntaChoices.findById(id);
    }

    async createPreguntaChoices({ pregunta }) {
        const createdPregunta = new PreguntaChoices(pregunta);

        return await createdPregunta.save();
    }

    async updatePreguntaChoices({ id, pregunta } = {}) {
        return await PreguntaChoices.findByIdAndUpdate(id, pregunta, {
            new: true,
        });
    }

    async deletePreguntaChoices({ id }) {
        return await PreguntaChoices.findByIdAndRemove(id);
    }

    async deletePreguntasChoicesOfExercise({ id }) {
        return await PreguntaChoices.deleteMany({ ejercicio: id });
    }
}

module.exports = PreguntaChoicesService;
