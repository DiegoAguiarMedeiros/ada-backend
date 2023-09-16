import Card from "../entities/Card";

export interface ICardRepository {
    getAll(userId:string): Promise<Card[]>;
    save(card: Card): Promise<Card>;
    update(cardId:string,card: Card): Promise<Card>;
    findById(cardId: string): Promise<Card>
    delete(cardId: string): Promise<boolean>
}