import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  {
    path: 'products',
    loadComponent: () =>
      import('./components/product-list/product-list.component').then(
        (m) => m.ProductListComponent
      ),
    canActivate: [() => import('./guard.guard').then((m) => m.guardGuard)],
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
];
