import { Response } from 'express';
import IsAuthenticatedUseCase from './IsAuthenticatedUseCase';

export default class IsAuthenticatedController {
  constructor(private isAuthenticatedUseCase: IsAuthenticatedUseCase) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handle = async (req: any, res: Response, next): Promise<Response> => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res
        .status(401)
        .json({ message: 'authorization header not provided.' });
    }

    const [, token] = authHeader.split(' ');

    try {
      const { user, userId } = await this.isAuthenticatedUseCase.execute(token);
      req.user = user;
      req.userId = userId;

      return next();
    } catch (err) {
      return res.status(401).json({
        message: err.message || 'Unexpected error.',
      });
    }
  };
}