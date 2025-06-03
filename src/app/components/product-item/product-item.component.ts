import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/Product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { eventNames } from 'process';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-item',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  constructor(private router: Router, private cartService: CartService) {}
  onProductClick(product: Product) {
    console.log('Product clicked:', product);

    this.router.navigate(['/product', product.id]);
  }
  @Input() product!: Product;
  @Output() addToCartEvent: EventEmitter<{ product: Product; quantity: number }> = new EventEmitter();

  quantity: number = 1;

  addToCart(event:Event ,product: Product, quantity: number) {
    // Emit the addToCartEvent with product and quantity
    event?.stopPropagation();
    this.addToCartEvent.emit({ product, quantity });


  }
}
