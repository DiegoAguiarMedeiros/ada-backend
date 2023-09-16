import SequilezeUserRepository from '../../repositories/implementations/MongoUserRepository';

import BCryptService from '../../services/implementations/BCryptService';
import JWTTokenService from '../../services/implementations/JWTTokenService';
import AuthenticationUseCase from './AuthenticateUseCase';
import AuthenticationController from './AuthenticateController';

const sequilezeUserRepository = new SequilezeUserRepository();
const bCryptService = new BCryptService();
const jwtTokenService = new JWTTokenService();

const authenticationUseCase = new AuthenticationUseCase(
  sequilezeUserRepository,
  bCryptService,
  jwtTokenService
);

const authenticationController = new AuthenticationController(
  authenticationUseCase
);

export default authenticationController;