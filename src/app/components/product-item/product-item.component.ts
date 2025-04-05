import { Component, Input } from '@angular/core';
import { Product } from '../../models/Product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-item',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  @Input() product!: Product;
  quantity: number = 1;

  addToCart(product: Product, quantity: number) {
    throw new Error('Method not implemented.');
  }
}
