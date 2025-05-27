import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  {
    path: 'products',
    loadComponent: () =>
      import('./components/product-list/product-list.component').then(
        (m) => m.ProductListComponent
      ),

  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'product/:id',
    loadComponent: () =>
      import(
        './components/product-item-detail/product-item-detail.component'
      ).then((m) => m.ProductItemDetailComponent),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./components/cart/cart.component').then((m) => m.CartComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'order-confirmation',
    loadComponent: () =>
      import(
        './components/order-confirmation/order-confirmation.component'
      ).then((m) => m.OrderConfirmationComponent),
    canActivate: [AuthGuard],
  },
];
