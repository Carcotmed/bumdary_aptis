const Card = require("../../models/auth/Card");

class CardsService {
    async getCardsOfUser({ userId }) {
        return await Card.find({ userId: userId });
    }

    async createCard({ card }) {
        const createdCard = new Card(card);
        return await createdCard.save();
    }

    async updateCard({ cardId, card } = {}) {
        return await Card.findByIdAndUpdate(cardId, card, {
            new: true,
        });
    }

    async deleteCard({ cardId }) {
        return await Card.findByIdAndRemove(cardId);
    }
}

module.exports = CardsService;
