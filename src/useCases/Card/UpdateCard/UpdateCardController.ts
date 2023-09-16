import { Request, Response } from 'express';
import UpdateCardCardUseCase from './UpdateCardUseCase';
import logger from '../../../config/logger';

export default class UpdateCardCardController {
  constructor(private UpdateCardCardUseCase: UpdateCardCardUseCase) { }

  handle = async (req: Request, res: Response): Promise<Response> => {
    const { body, params  } = req;
    const cardId = params.cardId;
    const {
      titulo,
      conteudo,
      lista,
    } = body;
    try {
      const result = await this.UpdateCardCardUseCase.execute(
        titulo,
        conteudo,
        lista,
        cardId);
      return res.status(200).json(result);
    } catch (err) {
      logger.error(err);
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  };
}