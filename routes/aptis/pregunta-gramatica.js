const express = require("express");
const PreguntaGramaticaService = require("../../services/pregunta-gramatica");

const router = express.Router();

const preguntaGramaticaService = new PreguntaGramaticaService();

//Pregunta gramática

//List preguntas
router.get("/", async function (req, res, next) {
  try {
    const preguntas = await preguntaGramaticaService.getAllPreguntasGramatica();

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
    const retrievedPregunta = await preguntaGramaticaService.getPreguntaGramatica(
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
    const createdPregunta = await preguntaGramaticaService.createPreguntaGramatica(
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

    const updatedPregunta = await preguntaGramaticaService.updatePreguntaGramatica(
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
    const deletedPregunta = await preguntaGramaticaService.deletePreguntaGramatica(
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
    const preguntasByEjercicio = await preguntaGramaticaService.getPreguntasGramaticaByEjercicio(
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
