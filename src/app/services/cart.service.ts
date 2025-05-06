import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

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
}
