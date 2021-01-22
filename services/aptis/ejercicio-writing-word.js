const EjercicioWritingWord = require("../../models/aptis/EjercicioWritingWord");

class EjercicioWritingWordService {
    async getAllEjerciciosWritingWord() {
        return await EjercicioWritingWord.find();
    }

    async getEjercicioWritingWord({ id }) {
        return await EjercicioWritingWord.findById(id);
    }

    async getEjerciciosWritingWordByDocument({ id }) {
        return await EjercicioWritingWord.find({ document: id });
    }

    async createEjercicioWritingWord({ pregunta }) {
        const createdEjercicio = new EjercicioWritingWord(pregunta);

        return await createdEjercicio.save();
    }

    async updateEjercicioWritingWord({ id, pregunta } = {}) {
        return await EjercicioWritingWord.findByIdAndUpdate(id, pregunta, {
            new: true,
        });
    }

    async deleteEjercicioWritingWord({ id }) {
        return await EjercicioWritingWord.findByIdAndRemove(id);
    }

    async deleteEjerciciosWritingWordOfExercise({ id }) {
        return await EjercicioWritingWord.deleteMany({ ejercicio: id });
    }
}

module.exports = EjercicioWritingWordService;
