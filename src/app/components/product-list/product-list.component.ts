import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/Product';
import { ProductItemComponent } from '../product-item/product-item.component';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../../services/cart.service';

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
    this.http.get('/api/get').subscribe((response) => {
      console.log(response);
    });
  }
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private authService: AuthService,
    private http: HttpClient,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      console.log(products);
      this.products = products;
    });
  }
  handleAddToCart(event: { product: Product; quantity: number }) {
    const { product, quantity } = event;
    console.log('Product added to cart:', product, 'Quantity:', quantity);
    // Here you can call your cart service to add the product to the cart
    this.cartService.addToCart(product.id, quantity).subscribe({
      next: (response) => {
        console.log('Product added to cart successfully:', response);
        alert('Product added to cart successfully');
      },
      error: (error) => {
        console.error('Error adding product to cart:', error);

      },
    });
  }
}
