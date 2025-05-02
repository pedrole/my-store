import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/Product';
import { ProductItemComponent } from '../product-item/product-item.component';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  makeTestCall() {
    this.authService.setToken('FAKE_TEST_TOKEN');
  /*   this.http.get('https://httpbin.org/get').subscribe((response) => {
      console.log('Response:', response);
    }); */
    this.http.get('/api/get').subscribe(response => {
      console.log(response);
    });
  }
  products: Product[] = [];

  constructor(private productService: ProductService, private authService: AuthService, private http: HttpClient) {}

  ngOnInit(): void {

    this.productService.getProducts().subscribe((products) => {
      console.log(products);
      this.products = products;
    });
  }
}
