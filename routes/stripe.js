const express = require("express");
const CardsService = require("../services/stripe/cards");

const cardsService = new CardsService();

const router = express.Router();

//Retrieve cards
router.get("/user/:id", async function (req, res, next) {
    try {
        const { id } = req.params;
        const retrievedCard = await cardsService.getCardsOfUser({ id });

        res.status(200).json({
            data: retrievedCard,
            message: "cards retrieved",
        });
    } catch (err) {
        next(err);
    }
});

//Create a note
router.post("/", async function (req, res, next) {
    try {
        const { body: card } = req;
        const createdCard = await cardsService.createCard({
            card,
        });

        res.status(200).json({
            data: createdCard,
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
        const { body: card } = req;

        const updatedCard = await cardsService.updateCard({
            id,
            card,
        });

        res.status(200).json({
            data: updatedCard,
            message: "card updated",
        });
    } catch (err) {
        next(err);
    }
});

//Delete a note
router.delete("/:id", async function (req, res, next) {
    try {
        const { id } = req.params;
        const deletedCard = await cardsService.deleteCard({
            id,
        });

        res.status(200).json({
            data: deletedCard,
            message: "card deleted",
        });
    } catch (err) {
        next(err);
    }
});

function authRoutes(app) {
    app.use("/stripe", router);
}

module.exports = authRoutes;
