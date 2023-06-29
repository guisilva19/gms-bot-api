import { Router } from "express";
import { UserController } from "../../controller/user.controller";

const routes = Router();

export const userRouter = () => {
  routes.get("/users", UserController.allUsersController);
  routes.post("/users", UserController.createUserController);
  return routes;
};
