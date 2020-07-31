import { User } from "../../entities/User";
import { IUserRepository } from "../UserRepository/IUserRepository";

export class MemoryUserRepository implements IUserRepository {
  private users: User[] = [];

  async findByName(name: string): Promise<User> {
    const user = this.users.find(user =>
      user.name.toUpperCase().includes(name.toUpperCase())
    );

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find(user => user.email === email);

    return user;
  }

  async save(user: User): Promise<void> {
    this.users.push(user);
  }
}
