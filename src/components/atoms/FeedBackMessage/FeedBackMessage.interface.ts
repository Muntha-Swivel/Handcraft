export interface IFeedBackMessage {
  type: "success" | "error";
  message: string;
  refresh: boolean;
}
