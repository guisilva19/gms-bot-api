import { calculateMinutes } from "../utils/calculateMinutesDiference";
import { salutation } from "../utils/hour";
import { MessageResponse } from "../utils/messages";

export class TwilioService {
  static async receiveMessage(body: any): Promise<boolean | void> {
    const lastResponseMinutes = await calculateMinutes(body.To);
    const message = `${salutation} ${body.ProfileName}!\n\nO que gostaria de consultar no GMS?\n\nOpções disponíveis:\n1. \u{1F4B0} Conta específica\n2. \u{1F4C3} Extrato mensal\n3. \u{1F4C5} Extrato anual`;
    if (lastResponseMinutes >= 5) {
      await MessageResponse.createResponse(message, body.To, body.From);
    } else {
      await MessageResponse.createResponse(
        "Vou tentar solucionar",
        body.To,
        body.From
      );
    }
  }
}
