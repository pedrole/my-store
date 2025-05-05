import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/Product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-item-detail',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  addToCart(product: Product , quantity: number) {
      this.cartService.addToCart(product?.id, quantity).subscribe({
        next: (response) => {
          console.log('Product added to cart successfully:', response);
          alert('Product added to cart successfully');
        },
        error: (error) => {
          console.error('Error adding product to cart:', error);
        },
      });
  }

  public product!: Product;
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {
    // Constructor logic if needed
  }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      // Fetch product details using the productId

      // You can call a service to fetch product details here
      this.productService.getProductById(+productId).subscribe((product) => {
        console.log('Product details:', product);
        this.product = product;
        // Handle the product details here
      });
    }
  }



  // Additional methods and properties can be added here
}
