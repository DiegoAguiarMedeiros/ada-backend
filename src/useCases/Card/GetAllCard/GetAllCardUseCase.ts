import { ICardRepository } from '../../../repositories/ICardRepository';

import Card from '../../../entities/Card';

export default class GetAllCardUseCase {
  constructor(
    private CardRepository: ICardRepository,
  ) { }

  execute = async (userId:string): Promise<Card[]> => {
    return await this.CardRepository.getAll(userId)
  };
}