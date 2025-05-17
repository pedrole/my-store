import { OrderItem } from "./order-item";

export interface Order {
  id: number;
  user_id: number;
  status: string;
  products: OrderItem[];
}
