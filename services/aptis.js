const MongoLib = require('../lib/mongo');
const mongoose = require('../lib/mongoose')
const PreguntaGramatica = require('../models/aptis/PreguntaGramatica')

class AptisService {
    //constructor() {
        // this.collection_pregunta_gramatica = "pregunta_gramatica"
        // this.mongoDB = new MongoLib();
    //}

    //Pregunta gramática

    async getAllPreguntasGramatica({ tags }) {
        console.log("\n\nTAGS")
        console.log({ tags });
        return await PreguntaGramatica.find({});
    }

    async getPreguntaGramatica({ id }) {
        return await PreguntaGramatica.findById(id);
    }

    async createPreguntaGramatica({ pregunta }) {
        
        console.log({ pregunta });

        const createdPregunta = new PreguntaGramatica(pregunta);

        console.log({ createdPregunta });

        return await createdPregunta.save();
    }

    async updatePreguntaGramatica({ id, pregunta } = {}) {
        return await PreguntaGramatica.findByIdAndUpdate(id, pregunta, { new: true });
    }

    async deletePreguntaGramatica({ id }) {
        return await PreguntaGramatica.findByIdAndRemove(id);
    }

}

module.exports = AptisService;