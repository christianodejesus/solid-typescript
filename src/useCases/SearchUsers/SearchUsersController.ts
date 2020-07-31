import { Request, Response } from 'express';
import { SearchUsersUseCase } from './SearchUsersUseCase';

export class SearchUsersController {
  constructor(
    private searchUsersUseCase: SearchUsersUseCase
  ) {}

  async handle (request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    try {
      const user = await this.searchUsersUseCase.execute({ name, email });

      return response.status(200).json(user);
    } catch (err) {
      return response.status(400).json({
        message: err.message
      });
    }
  }
}
