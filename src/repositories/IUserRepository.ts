import User from "../entities/User";

export interface IUserRepository {
  findByUsernameWithPassword(Email: string): Promise<User>;
  findById(userId: string): Promise<User>
}