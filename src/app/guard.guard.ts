import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';

export const guardGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  console.log('Guard activated');

  return auth.isLoggedIn() ? true : false;

};
