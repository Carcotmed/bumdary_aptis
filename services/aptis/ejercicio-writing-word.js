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

    async createEjercicioWritingWord({ ejercicio }) {
        const createdEjercicio = new EjercicioWritingWord(ejercicio);

        return await createdEjercicio.save();
    }

    async updateEjercicioWritingWord({ id, ejercicio } = {}) {
        return await EjercicioWritingWord.findByIdAndUpdate(id, ejercicio, {
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
