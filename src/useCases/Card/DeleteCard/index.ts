import SequilezeCardRepository from '../../../repositories/implementations/MongoCardRepository';

import DeleteCardUseCase from './DeleteCardUseCase';
import DeleteCardController from './DeleteCardController';

const sequilezeCardRepository = new SequilezeCardRepository();

const deleteCardUseCase = new DeleteCardUseCase(
  sequilezeCardRepository,
);

const deleteCardController = new DeleteCardController(deleteCardUseCase);

export default deleteCardController;