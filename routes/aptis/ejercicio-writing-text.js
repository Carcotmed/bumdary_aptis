const express = require("express");
const EjercicioWritingTextService = require("../../services/aptis/ejercicio-writing-text");

const router = express.Router();

const ejercicioWritingTextService = new EjercicioWritingTextService();

//Ejercicio gramática

//List ejercicios
router.get("/", async function (req, res, next) {
    try {
        const ejercicios = await ejercicioWritingTextService.getAllEjerciciosWritingText();

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
        const retrievedEjercicio = await ejercicioWritingTextService.getEjercicioWritingText(
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
        const retrievedEjercicio = await ejercicioWritingTextService.getEjerciciosWritingTextByDocumento(
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
        const createdEjercicio = await ejercicioWritingTextService.createEjercicioWritingText(
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

        const updatedEjercicio = await ejercicioWritingTextService.updateEjercicioWritingText(
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
        const deletedEjercicio = await ejercicioWritingTextService.deleteEjercicioWritingText(
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
