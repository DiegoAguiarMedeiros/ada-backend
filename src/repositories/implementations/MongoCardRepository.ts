import { ICardRepository } from '../ICardRepository';
import Card from '../../entities/Card';
import CardModel from '../models/CardModel';

export default class MongoCardRepository implements ICardRepository {
  async findById(cardId: string): Promise<Card> {
    const findedCard = await CardModel.findOne({ _id: cardId });
    return findedCard ? new Card(findedCard.toJSON()) : null;
  }
  async update(cardId: string, params: Card): Promise<Card> {
    const card: Card = await CardModel.findOneAndUpdate(
      { _id: cardId },
      { $set: params },
      { new: true }
    );
    return card;
  }
  async getAll(userId:string): Promise<Card[]> {
    const allCards = await CardModel.find({user:userId});
    return allCards.map((card) => new Card(card.toJSON()));
  }
  async save(card: Card): Promise<Card> {
    const newCard = await CardModel.create(card);
    return newCard.toJSON();
  }
}