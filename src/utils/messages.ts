const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_ACCOUNT_TOKEN;
const client = require("twilio")(accountSid, authToken);

export class MessageResponse {
  static async createResponse(message: string, from: string, to: string) {
    await client.messages.create({
      body: message,
      from: from,
      to: to,
    });
  }

  static async getLastMessage(from: string) {
    const messages = await client.messages.list({
      from: from,
    });
    return messages[0]
  }
}
