import { GMailMailProvider } from "../../providers/implementations/GMailMailProvider";
import { UserRepository } from "../../repositories/UserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const gmailMailProvider = new GMailMailProvider();
const usersRepository = new UserRepository();

const createUserUseCase = new CreateUserUseCase(
  usersRepository,
  gmailMailProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
