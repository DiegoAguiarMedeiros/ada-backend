import { Request, Response } from 'express';
import GetAllCardUseCase from './GetAllCardUseCase';
import logger from '../../../config/logger';

export default class GetAllCardController {
  constructor(private GetAllCardUseCase: GetAllCardUseCase) { }

  handle = async (req: Request, res: Response): Promise<Response> => {
    const { user } = req;
    try {
      const result = await this.GetAllCardUseCase.execute(user._id);
      return res.status(200).json(result);
    } catch (err) {
      logger.error(err);
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  };
}