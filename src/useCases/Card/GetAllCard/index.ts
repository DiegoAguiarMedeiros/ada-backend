import SequilezeCardRepository from '../../../repositories/implementations/MongoCardRepository';

import GetAllCardUseCase from './GetAllCardUseCase';
import GetAllCardController from './GetAllCardController';

const sequilezeCardRepository = new SequilezeCardRepository();

const getCardUseCase = new GetAllCardUseCase(
  sequilezeCardRepository,
);

const getAllCardController = new GetAllCardController(getCardUseCase);

export default getAllCardController;