export type ShippingStatus =
  | "Not Started"
  | "Ready For Shipping"
  | "In Transit"
  | "Processing"
  | "Cleared";

export interface Order {
  orderDate: Date;
  trackingId: string;
  shippingStatus: ShippingStatus;
  shopForMeStatus: string;
  shopForMeCost: number;
  shippingCost: number;
}
