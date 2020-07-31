import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { searchUsersController } from "./useCases/SearchUsers";

const router = Router();

router.get('/public', (request, response) => {
  return response
    .status(200)
    .json({
      message: 'RestAPI with SOLID principles'
    });
});

router.post('/pvt/users', (request, response) => {
  return createUserController.handle(request, response);
});

router.get('/pvt/users', (request, response) => {
  return searchUsersController.handle(request, response);
});

export { router };
