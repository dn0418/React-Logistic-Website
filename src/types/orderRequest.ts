export type RequestStatus = "Responded"  | "Not Responded" ;
export interface OrderRequest {
  orderId: string;
  requestId: string;
  status: RequestStatus;
  date: Date;
  image: string;
}
