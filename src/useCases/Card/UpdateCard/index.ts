import SequilezeCardRepository from '../../../repositories/implementations/MongoCardRepository';

import UpdateCardCardUseCase from './UpdateCardUseCase';
import UpdateCardCardController from './UpdateCardController';

const sequilezeCardRepository = new SequilezeCardRepository();

const updateCardUseCase = new UpdateCardCardUseCase(
  sequilezeCardRepository,
);

const updateCardCardController = new UpdateCardCardController(updateCardUseCase);

export default updateCardCardController;