import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseUrl = `${environment.apiUrl}/orders`;

  constructor(private http: HttpClient) { }

  addToCart(productId: number, quantity: number) {
    const order = {
      product_id: productId,
      quantity
    };
    return this.http.post(`${this.baseUrl}/add-product`, order);
  }

  getCart(userId: number) {
    return this.http.get<Order>(`${this.baseUrl}/current/${userId}`);
  }
  updateProductQuantity(productId: number, quantity: number) {
    const order = {
      product_id: productId,
      quantity
    };
    return this.http.put(`${this.baseUrl}/update-product`, order);
  }
  removeFromCart(productId: number) {
    return this.http.put(`${this.baseUrl}/update-product`, {
      product_id: productId,
      quantity: 0
    });
  }

  completeCurrentOrder() {
    return this.http.patch(`${this.baseUrl}/complete-current-order`, {});

  }

}
