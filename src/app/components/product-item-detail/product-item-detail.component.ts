import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/Product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-item-detail',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  addToCart(arg0: Product | undefined, arg1: number) {
    throw new Error('Method not implemented.');
  }

  public product: Product | undefined;
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
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
