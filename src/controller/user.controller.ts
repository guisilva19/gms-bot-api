import { Request, Response } from "express";
import { UserService } from "../service/user.service";

export class UserController {
  static async allUsersController(req: Request, res: Response) {
    const allUsers = await UserService.allUsersService();
    return res.status(200).json(allUsers);
  }

  static async createUserController(req: Request, res: Response) {
    // const userData = {
    //   name: 'Gui',
    //   email: 'gui@gmail.com',
    //   username: "guiga",
    //   password: "123"
    // }
    const userData = req.body;
    const allUsers = await UserService.createUserService(userData);
    return res.status(200).json(allUsers);
  }
}
