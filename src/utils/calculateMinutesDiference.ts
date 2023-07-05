import { MessageResponse } from "./messages";

export const calculateMinutes = async (from: string) => {
  const sitTime = await MessageResponse.getLastMessage(from);
  const currentTime: any = new Date();
  const sitTimeDate: any = new Date(sitTime.dateSent);

  const result = new Date(currentTime - sitTimeDate).getUTCMinutes();

  return result;
};
