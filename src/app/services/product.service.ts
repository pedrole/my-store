import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'; // Import environment
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = environment.apiUrl; // Use environment.apiUrl

  constructor(private httpClient: HttpClient) {}

  getProducts() {
    return this.httpClient.get<Product[]>(`${this.apiUrl}/products`); // Use apiUrl here
  }

  getProductById(id: number) {
    return this.httpClient.get<Product>(`${this.apiUrl}/products/${id}`); // Use apiUrl here
  }
}
