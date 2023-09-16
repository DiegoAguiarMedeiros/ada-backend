import { Request, Response } from 'express';
import DeleteCardUseCase from './DeleteCardUseCase';
import logger from '../../../config/logger';

export default class DeleteCardController {
  constructor(private DeleteCardUseCase: DeleteCardUseCase) { }

  handle = async (req: Request, res: Response): Promise<Response> => {
    const { params,user } = req;
    const cardId = params.cardId;
    try {
      const result = await this.DeleteCardUseCase.execute(cardId,user._id);
      return res.status(200).json(result);
    } catch (err) {
      logger.error(err);
      if(err.message === 'Card: Card not found.' ){
        return res.status(404).json({
            message: err.message || 'Unexpected error.',
          });
      }
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  };
}