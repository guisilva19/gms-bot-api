import { Request, Response } from "express";
import { TwilioService } from "../service/twilio.service";

export class TwilioController {
  static async twilioController(req: Request, res: Response) {
    await TwilioService.receiveMessage(req.body);
    return res.status(200);
  }
}
