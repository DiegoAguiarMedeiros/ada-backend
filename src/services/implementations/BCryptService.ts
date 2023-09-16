import bcrypt from 'bcrypt';
import { ICryptService } from '../ICryptService';

const NUMBER_OF_SALTS = 10;
export default class BCryptService implements ICryptService {
  hash(value: string): Promise<string> {
    return bcrypt.hash(value, NUMBER_OF_SALTS);
  }

  compare(value: string, hash: string): Promise<boolean> {
    console.log('value',value)
    console.log('hash',hash)
    return bcrypt.compare(value, hash);
  }
}