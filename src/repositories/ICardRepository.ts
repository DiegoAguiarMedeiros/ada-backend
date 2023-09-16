import Card from "../entities/Card";

export interface ICardRepository {
    getAll(): Promise<Card[]>;
    save(card: Card): Promise<Card>;
}