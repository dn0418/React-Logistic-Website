export type Status = "Responded" | "Processed" | "Not Responded to";
export interface orderRequest {
  orderId: string;
  requestId: string;
  status: Status;
  date: string;
  images: string[];
}
