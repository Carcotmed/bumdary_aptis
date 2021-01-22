const EjercicioComprensionL = require("../../models/aptis/EjercicioComprensionL");

class EjercicioComprensionLService {
    async getAllEjerciciosComprensionL() {
        return await EjercicioComprensionL.find();
    }

    async getEjercicioComprensionL({ id }) {
        return await EjercicioComprensionL.findById(id);
    }

    async getEjerciciosComprensionLByDocumento({ id }) {
        return await EjercicioComprensionL.find({ documento: id });
    }

    async createEjercicioComprensionL({ ejercicio }) {
        const createdEjercicio = new EjercicioComprensionL(ejercicio);

        return await createdEjercicio.save();
    }

    async updateEjercicioComprensionL({ id, ejercicio } = {}) {
        return await EjercicioComprensionL.findByIdAndUpdate(id, ejercicio, {
            new: true,
        });
    }

    async deleteEjercicioComprensionL({ id }) {
        return await EjercicioComprensionL.findByIdAndRemove(id);
    }
}

module.exports = EjercicioComprensionLService;
