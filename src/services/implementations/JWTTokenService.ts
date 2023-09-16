import jwt from 'jsonwebtoken';
import { ITokenService } from '../ITokenService';

const oneDayInSeconds = 86400;
const PRIVATE_KEY = 'mytm_2020';
export default class JWTTokenService implements ITokenService {
  sign(payload: unknown): string {
    return jwt.sign(payload, PRIVATE_KEY, { expiresIn: oneDayInSeconds });
  }

  verify(token: string): unknown {
    return jwt.verify(token, PRIVATE_KEY);
  }
}