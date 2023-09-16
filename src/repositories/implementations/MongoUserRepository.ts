import { IUserRepository } from '../IUserRepository';
import User from '../../entities/User';
import UserModel from '../models/UserModel';

export default class MongoUserRepository implements IUserRepository {

  async findByUsernameWithPassword(login: string):Promise<User>  {
    const findedUser = await UserModel.findOne({ login }).select(
      '+password'
    );
    return findedUser ? new User(findedUser.toJSON()) : null;
  }
}