import { Request, Response } from 'express';
import AuthenticateUseCase from './AuthenticateUseCase';

export default class AuthenticateController {
  constructor(
    private authenticateUseCase: AuthenticateUseCase,
  ) {}

  handle = async (req: Request, res: Response): Promise<Response> => {
    const { login, senha } = req.body;

    try {
      const userAndToken = await this.authenticateUseCase.execute(login, senha);
      return res.status(200).send(userAndToken);
    } catch (err) {
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}