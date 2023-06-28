import { Express } from "express";
import { userRouter } from "./userRoutes";

export const AppRoutes = (app: Express) => {
  app.use(userRouter());
};
