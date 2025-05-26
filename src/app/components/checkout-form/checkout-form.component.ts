import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-checkout-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css'],
})
export class CheckoutFormComponent {
  onSubmit() {
    if (this.checkoutForm.valid) {
      this.cartService
        .completeCurrentOrder()
        .subscribe({
          next: (response) => {
            console.log('Order completed successfully:', response);
            const navigationExtras = {
              state: {
                fullName: this.checkoutForm.value.fullName,
                total: response.total, // Ensure total is a number
              },
            };
            this.router.navigate(['/order-confirmation'], navigationExtras);
            //alert('Order completed successfully');
          },
          error: (error) => {
            console.error('Error completing order:', error);
            alert('Error completing order');
          },
        });
      console.log('Form submitted:', this.checkoutForm.value);

    } else {
      console.log('Form is invalid');
      alert('Please fill out the form correctly.');
    }
  }

  checkoutForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private cartService: CartService) {
    this.checkoutForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(100)]],
      creditCardNumber: [
        '',
        [Validators.required, Validators.pattern(/^\d{16}$/)],
      ],
    });
  }
}
