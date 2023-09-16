import SequilezeRoleRepository from '../../../repositories/implementations/MongoCardRepository';

import GetAllCardUseCase from './GetAllCardUseCase';
import GetAllCardController from './GetAllCardController';

const sequilezeRoleRepository = new SequilezeRoleRepository();

const getRoleUseCase = new GetAllCardUseCase(
  sequilezeRoleRepository,
);

const getAllCardController = new GetAllCardController(getRoleUseCase);

export default getAllCardController;