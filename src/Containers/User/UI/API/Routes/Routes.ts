import { Router } from 'express';
import Controller from '../Controllers/Controller';

export default (router: Router): void => {
  const userController = new Controller();

  router.post('/users', userController.createUser);
  router.get('/users', userController.getAllUsers);
};
