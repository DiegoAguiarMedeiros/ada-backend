import { ICardRepository } from '../../../repositories/ICardRepository';

import Card from '../../../entities/Card';

export default class UpdateCardCardUseCase {
  constructor(
    private CardRepository: ICardRepository,
  ) { }

  execute = async (titulo:string,
    conteudo:string,
    lista:string,
    cardId:string,
    ): Promise<Card> => {

      const oldCard = await this.CardRepository.findById(cardId);

      const updatedCard = new Card({
        ...oldCard,
        conteudo: conteudo || oldCard.conteudo,
        lista: lista || oldCard.lista,
        titulo: titulo || oldCard.titulo,
      });

    return await this.CardRepository.update(cardId, updatedCard);
  };
}