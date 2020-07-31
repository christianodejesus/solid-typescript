import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUserRepository } from "../../repositories/UserRepository/IUserRepository";
import { ICreateUserRequestDTO } from "./ICreateUserRequestDTO";

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUserRepository,
    private mailProvider: IMailProvider
  ) {}

  public async execute(data: ICreateUserRequestDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

    if (userAlreadyExists) {
      throw new Error('User already exists.');
    }

    const newUser = new User(data);

    await this.usersRepository.save(newUser);

    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email
      },
      from: {
        name: 'Equipe do meu app',
        email: 'equipe@meuapp.com'
      },
      subject: 'Seja bem vindo ao app',
      body: '<p>Você pode fazer login em nosso app</p>'
    });
  }
}
