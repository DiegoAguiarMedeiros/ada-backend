import { Request, Response } from 'express';
import CreateUseCase from './CreateCardUseCase';
import logger from '../../../config/logger';

export default class CreateCardController {
  constructor(private CreateUseCase: CreateUseCase) { }

  handle = async (req: Request, res: Response): Promise<Response> => {
    const { body,user } = req;
    console.log('user',user)
    const {
      titulo,
      conteudo,
      lista,
    } = body;
    try {
      const result = await this.CreateUseCase.execute(
        titulo,
        conteudo,
        lista,
        user._id);
      return res.status(200).json(result);
    } catch (err) {
      logger.error(err);
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  };
}