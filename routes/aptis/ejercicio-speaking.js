const express = require("express");
const EjercicioSpeakingService = require("../../services/aptis/ejercicio-speaking");

const router = express.Router();

const ejercicioSpeakingService = new EjercicioSpeakingService();

//Ejercicio gramática

//List ejercicios
router.get("/", async function (req, res, next) {
    try {
        const ejercicios = await ejercicioSpeakingService.getAllEjerciciosSpeaking();

        res.status(200).json({
            data: ejercicios,
            message: "ejercicios listed",
        });
    } catch (err) {
        next(err);
    }
});

//Retrieve ejercicio
router.get("/:id", async function (req, res, next) {
    try {
        const { id } = req.params;
        const retrievedEjercicio = await ejercicioSpeakingService.getEjercicioSpeaking(
            { id }
        );

        res.status(200).json({
            data: retrievedEjercicio,
            message: "ejercicio retrieved",
        });
    } catch (err) {
        next(err);
    }
});

//Retrieve ejercicio
router.get("/documento/:id", async function (req, res, next) {
    try {
        const { id } = req.params;
        const retrievedEjercicio = await ejercicioSpeakingService.getEjerciciosSpeakingByDocumento(
            { id }
        );

        res.status(200).json({
            data: retrievedEjercicio,
            message: "ejercicio retrieved",
        });
    } catch (err) {
        next(err);
    }
});

//Create a note
router.post("/", async function (req, res, next) {
    try {
        const { body: ejercicio } = req;
        const createdEjercicio = await ejercicioSpeakingService.createEjercicioSpeaking(
            {
                ejercicio,
            }
        );

        res.status(200).json({
            data: createdEjercicio,
            message: "ejercicio created",
        });
    } catch (err) {
        next(err);
    }
});

//Update a note
router.patch("/:id", async function (req, res, next) {
    try {
        const { id } = req.params;
        const { body: ejercicio } = req;

        const updatedEjercicio = await ejercicioSpeakingService.updateEjercicioSpeaking(
            {
                id,
                ejercicio,
            }
        );

        res.status(200).json({
            data: updatedEjercicio,
            message: "ejercicio updated",
        });
    } catch (err) {
        next(err);
    }
});

//Delete a note
router.delete("/:id", async function (req, res, next) {
    try {
        const { id } = req.params;
        const deletedEjercicio = await ejercicioSpeakingService.deleteEjercicioSpeaking(
            { id }
        );

        res.status(200).json({
            data: deletedEjercicio,
            message: "note deleted",
        });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
