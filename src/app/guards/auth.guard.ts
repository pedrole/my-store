import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { isPlatformBrowser } from '@angular/common';

export const AuthGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
    const platformId = inject(PLATFORM_ID);

   // Allow navigation on the server, enforce guard only in the browser
  if (!isPlatformBrowser(platformId)) {
    return true;
  }


  if (authService.isLoggedIn()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
