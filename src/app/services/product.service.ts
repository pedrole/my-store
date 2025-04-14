import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/Product';


@Injectable({
  providedIn: 'root'
})


export class ProductService {


  constructor(private httpClient: HttpClient) {

  }

  getProducts() {
    return this.httpClient.get<Product[]>('http://localhost:3000/products');
  }

  getProductById(id: number) {
    return this.httpClient.get<Product>(`http://localhost:3000/products/${id}`);
  }
}
