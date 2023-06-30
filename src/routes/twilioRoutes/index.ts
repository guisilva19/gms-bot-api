import { Router } from "express";
import { TwilioController } from "../../controller/twilio.controller";

const routes = Router();

export const twilioRouter = () => {
  routes.post("/webhook", TwilioController.twilioController);
  return routes;
};
