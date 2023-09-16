import Card from "../entities/Card";

export interface ICardRepository {
    getAll(userId:string): Promise<Card[]>;
    save(card: Card): Promise<Card>;
}