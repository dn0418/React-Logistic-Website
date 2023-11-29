export interface orderRequest {
  id: string;
  status: "Responded" | "Processed" | "Not Responded to";
  date: string;
  images: string[];
}
