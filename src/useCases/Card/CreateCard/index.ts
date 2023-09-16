import SequilezeCardRepository from '../../../repositories/implementations/MongoCardRepository';

import CreateUseCase from './CreateCardUseCase';
import CreateController from './CreateCardController';

const sequilezeCardRepository = new SequilezeCardRepository();

const createCardUseCase = new CreateUseCase(
  sequilezeCardRepository,
);

const createController = new CreateController(createCardUseCase);

export default createController;