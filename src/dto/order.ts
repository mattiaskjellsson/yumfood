import { OrderItemDto } from "./order.item";

export interface OrderDto {
    userId: string;
    vendorId: string;
    orderItems: OrderItemDto[];
    request: string;
  }