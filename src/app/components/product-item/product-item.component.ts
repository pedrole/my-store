import { Component, Input } from '@angular/core';
import { Product } from '../../models/Product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { eventNames } from 'process';

@Component({
  selector: 'app-product-item',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  constructor(private router: Router) {}
  onProductClick(product: Product) {
    console.log('Product clicked:', product);

    this.router.navigate(['/product', product.id]);
  }
  @Input() product!: Product;
  quantity: number = 1;

  addToCart(product: Product, quantity: number) {
    console.log('Product added to cart:', product);

    event?.stopPropagation();
    throw new Error('Method not implemented.');
  }
}
