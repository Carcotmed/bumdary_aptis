const EjercicioComprensionC = require("../../models/aptis/EjercicioComprensionC");

class EjercicioComprensionCService {
    async getAllEjerciciosComprensionC() {
        return await EjercicioComprensionC.find();
    }

    async getEjercicioComprensionC({ id }) {
        return await EjercicioComprensionC.findById(id);
    }

    async createEjercicioComprensionC({ ejercicio }) {
        const createdEjercicio = new EjercicioComprensionC(ejercicio);

        return await createdEjercicio.save();
    }

    async updateEjercicioComprensionC({ id, ejercicio } = {}) {
        return await EjercicioComprensionC.findByIdAndUpdate(id, ejercicio, {
            new: true,
        });
    }

    async deleteEjercicioComprensionC({ id }) {
        return await EjercicioComprensionC.findByIdAndRemove(id);
    }
}

module.exports = EjercicioComprensionCService;
