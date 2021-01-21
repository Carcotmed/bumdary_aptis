const express = require('express');
const AptisService = require('../services/aptis')

function aptisApi(app) {
    const router = express.Router();
    app.use("/api/aptis", router);

    const aptisService = new AptisService();

    //Pregunta gramática

    //List preguntas
    router.get("/pregunta_gramatica", async function(req, res, next) {

        try {
            const { tags } = req.query;
            const preguntas = await aptisService.getAllPreguntasGramatica({ tags });

            res.status(200).json({
                data:preguntas,
                message: 'preguntas listed'
            });

        } catch(err){
            next(err);
        }

    });

    //Retrieve pregunta
    router.get('/pregunta_gramatica/:id', async function(req, res, next) {

        try {

            const { id } = req.params;
            const retrievedPregunta = await aptisService.getPreguntaGramatica({ id });

            res.status(200).json({
                data:retrievedPregunta,
                message: 'pregunta retrieved'
            });

        } catch(err){
            next(err);
        }

    });

    //Create a note
    router.post("/pregunta_gramatica/", async function(req, res, next) {

        try {
            const { body: pregunta } = req;
            const createdPregunta = await aptisService.createPreguntaGramatica({ pregunta });

            res.status(200).json({
                data: createdPregunta,
                message: 'pregunta created'
            });

        } catch(err){
            next(err);
        }

    });

    //Update a note
    router.patch("/pregunta_gramatica/:id", async function(req, res, next) {

        try {
            const { id } = req.params;
            const { body: pregunta} = req;

            const updatedPregunta = await aptisService.updatePreguntaGramatica({ id, pregunta });

            res.status(200).json({
                data:updatedPregunta,
                message: 'pregunta updated'
            });

        } catch(err){
            next(err);
        }

    });

    //Delete a note
    router.delete("/pregunta_gramatica/:id", async function(req, res, next) {

        try {
            const { id } = req.params;
            const deletedPregunta = await aptisService.deletePreguntaGramatica({ id });

            res.status(200).json({
                data:deletedPregunta,
                message: 'note deleted'
            });

        } catch(err){
            next(err);
        }

    });

    
};

module.exports = aptisApi;