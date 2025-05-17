import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';
import { Order } from '../../models/order';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderItem } from '../../models/order-item';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId).subscribe({
      next: (response) => {
        console.log('Product removed from cart successfully:', response);
        alert('Product removed from cart successfully');
        // Refresh the cart after removing the product
        this.loadCart();
      },
      error: (error) => {
        console.error('Error removing product from cart:', error);
      },
    });
  }
  updateQuantity(item: OrderItem) {
    this.cartService
      .updateProductQuantity(item.product_id, item.quantity)
      .subscribe({
        next: (response) => {
          console.log('Product quantity updated successfully:', response);
          // update total
          this.calculateTotal();
        },
        error: (error) => {
          console.error('Error updating product quantity:', error);
        },
      });
  }
  cart: Order | null = null;
  total = 0;
  constructor(
    private cartService: CartService,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.loadCart();
  }

  private loadCart(): void {
    console.log('CartComponent initialized');

    const userId = this.authService.getCurrentUserId();
    console.log('Current user ID:', userId);

    if (userId) {
      this.cartService.getCart(userId).subscribe({
        next: (res) => {
          console.log('Cart response:', res);

          this.cart = res;
          this.calculateTotal();
          console.log('Cart fetched successfully:', this.cart);
        },
        error: (err) => {
          console.error('Error fetching cart:', err);
        },
      });
    }
  }
  private calculateTotal(): void {
    if (this.cart && this.cart.products) {
      this.total = this.cart.products.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    } else {
      this.total = 0;
    }
  }
}
