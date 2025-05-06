import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseUrl = 'http://localhost:3000/orders';

  constructor(private http: HttpClient) { }

  addToCart(productId: number, quantity: number) {
    const order = {
      product_id: productId,
      quantity
    };
    return this.http.post(`${this.baseUrl}/add-product`, order);
  }
}
