const EjercicioCohesion = require("../../models/aptis/EjercicioCohesion");

class EjercicioCohesionService {
    async getAllEjerciciosCohesion() {
        return await EjercicioCohesion.find();
    }

    async getEjercicioCohesion({ id }) {
        return await EjercicioCohesion.findById(id);
    }

    async createEjercicioCohesion({ ejercicio }) {
        const createdEjercicio = new EjercicioCohesion(ejercicio);

        return await createdEjercicio.save();
    }

    async updateEjercicioCohesion({ id, ejercicio } = {}) {
        return await EjercicioCohesion.findByIdAndUpdate(id, ejercicio, {
            new: true,
        });
    }

    async deleteEjercicioCohesion({ id }) {
        return await EjercicioCohesion.findByIdAndRemove(id);
    }
}

module.exports = EjercicioCohesionService;
