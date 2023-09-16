import { IUserRepository } from '../../repositories/IUserRepository';

import { ICryptService } from '../../services/ICryptService';
import { ITokenService } from '../../services/ITokenService';

export default class AuthenticateUseCase {
  constructor(
    private userRepository: IUserRepository,
    private cryptService: ICryptService,
    private tokenService: ITokenService,
  ) { }

  execute = async (email: string, password: string) => {
    const user = await this.userRepository.findByUsernameWithPassword(
      email
    );
    const errorMessage = {
      code: 0,
      message: ''
    }

    if (!user) {
      errorMessage.code = 1;
      errorMessage.message = "AuthenticateUseCase: user not found."
      throw new Error(JSON.stringify(errorMessage));
    }

    const passwordVerification = await this.cryptService.compare(
      password,
      user.password
    );

    if (!passwordVerification) {
      errorMessage.code = 2;
      errorMessage.message = "AuthenticateUseCase: invalid password."
      throw new Error(JSON.stringify(errorMessage));
    }

    user.password = undefined;


    const token = this.tokenService.sign({ userId: user._id });

    return { user: user, token };
  };
}