import { ICardRepository } from '../../../repositories/ICardRepository';

import Card from '../../../entities/Card';

export default class CreateCardUseCase {
  constructor(
    private CardRepository: ICardRepository,
  ) { }

  execute = async (titulo:string,
    conteudo:string,
    lista:string,
    userId:string
    ): Promise<Card> => {
    const card = new Card({
      titulo,
      conteudo,
      lista,
      user:userId
    });
    return await this.CardRepository.save(card)
  };
}