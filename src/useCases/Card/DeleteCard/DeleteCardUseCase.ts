import Card from '../../../entities/Card';
import { ICardRepository } from '../../../repositories/ICardRepository';

export default class GetAllCardUseCase {
  constructor(
    private CardRepository: ICardRepository,
  ) { }

  execute = async (cardId:string,userId:string): Promise<Card[]> => {
    const deleteReturn = await this.CardRepository.delete(cardId);
    console.log('deleteReturn',deleteReturn)
    if(deleteReturn){
        return await this.CardRepository.getAll(userId)
    }
    throw new Error('Card: Card not found.');
  };
}