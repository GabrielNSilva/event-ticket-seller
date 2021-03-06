/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import ApiController from '@/Ship/Parents/Controllers/ApiController';
import GetAllUsersAction from '@/Containers/User/Actions/GetAllUsersAction';

/**
 * Class Controller.
 *
 * @author Gabriel N Silva <gabrielnsilva1@hotmail.com>
 */
export default class Controller extends ApiController {
  createUser = async (request: Request, response: Response) => {
    response.status(201).json({ message: 'User Created' });
  };

  getAllUsers = async (request: Request, response: Response) => {
    const users = GetAllUsersAction()
    response.status(201).json({ users });
  };
}
