import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'products',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'login',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'cart',
    renderMode: RenderMode.Server // Requires authentication
  },
  {
    path: 'order-confirmation',
    renderMode: RenderMode.Server // Dynamic content
  },
  {
    path: 'product/:id',
    renderMode: RenderMode.Server, // Change from Prerender to Server for dynamic routes
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
