import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/UserRepository/IUserRepository";
import { ISearchUsersRequestDTO } from "./ISearchUsersRequestDTO";

export class SearchUsersUseCase {
  constructor(
    private usersRepository: IUserRepository
  ) { }

  public async execute(data: ISearchUsersRequestDTO): Promise<User> {
    let user = null;

    if (data.email) {
      user = await this.usersRepository.findByEmail(data.email);
    } else {
      if (data.name) {
        user = await this.usersRepository.findByName(data.name);
      }
    }

    if (!user) {
      throw new Error('User not found.');
    }

    return user;
  }
}
