const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_ACCOUNT_TOKEN;
const client = require("twilio")(accountSid, authToken);

export class TwilioService {
  static async receiveMessage(body: any): Promise<boolean> {
    await client.messages.create({
      body: "Recebemos sua mensagem!",
      from: body.To,
      to: body.From,
    });
    return true;
  }
}
