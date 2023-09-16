import { ICardRepository } from '../ICardRepository';
import Card from '../../entities/Card';
import CardModel from '../models/CardModel';

export default class MongoCardRepository implements ICardRepository {
  async getAll(): Promise<Card[]> {
    const allCards = await CardModel.find();
    return allCards.map((card) => new Card(card.toJSON()));
  }
  async save(card: Card): Promise<Card> {
    const newCard = await CardModel.create(card);
    return newCard.toJSON();
  }
}