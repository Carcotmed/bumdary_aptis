const express = require("express");
const PreguntaChoicesService = require("../../services/aptis/pregunta-choices");

const router = express.Router();

const preguntaChoicesService = new PreguntaChoicesService();

//Pregunta gramática

//List preguntas
router.get("/", async function (req, res, next) {
    try {
        const preguntas = await preguntaChoicesService.getAllPreguntasChoices();

        res.status(200).json({
            data: preguntas,
            message: "preguntas listed",
        });
    } catch (err) {
        next(err);
    }
});

//Retrieve pregunta
router.get("/:id", async function (req, res, next) {
    try {
        const { id } = req.params;
        const retrievedPregunta = await preguntaChoicesService.getPreguntaChoices(
            { id }
        );

        res.status(200).json({
            data: retrievedPregunta,
            message: "pregunta retrieved",
        });
    } catch (err) {
        next(err);
    }
});

//Create a note
router.post("/", async function (req, res, next) {
    try {
        const { body: pregunta } = req;
        const createdPregunta = await preguntaChoicesService.createPreguntaChoices(
            {
                pregunta,
            }
        );

        res.status(200).json({
            data: createdPregunta,
            message: "pregunta created",
        });
    } catch (err) {
        next(err);
    }
});

//Update a note
router.patch("/:id", async function (req, res, next) {
    try {
        const { id } = req.params;
        const { body: pregunta } = req;

        const updatedPregunta = await preguntaChoicesService.updatePreguntaChoices(
            {
                id,
                pregunta,
            }
        );

        res.status(200).json({
            data: updatedPregunta,
            message: "pregunta updated",
        });
    } catch (err) {
        next(err);
    }
});

//Delete a note
router.delete("/:id", async function (req, res, next) {
    try {
        const { id } = req.params;
        const deletedPregunta = await preguntaChoicesService.deletePreguntaChoices(
            { id }
        );

        res.status(200).json({
            data: deletedPregunta,
            message: "pregunta deleted",
        });
    } catch (err) {
        next(err);
    }
});

//TEMPORAL
router.get("/test/:id", async function (req, res, next) {
    try {
        const { id } = req.params;
        const preguntasByEjercicio = await preguntaChoicesService.getPreguntasChoicesByEjercicio(
            { id }
        );

        res.status(200).json({
            data: preguntasByEjercicio,
            message: "aceituna",
        });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
