import { Express } from "express";
import { userRouter } from "./userRoutes";
import { twilioRouter } from "./twilioRoutes";

export const AppRoutes = (app: Express) => {
  app.use(userRouter());
  app.use(twilioRouter())
};
