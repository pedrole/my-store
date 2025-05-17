import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'token';
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  login(credentials: {
    firstname: string;
    lastname: string;
    password: string;
  }) {
    return this.http
      .post<{
        id: string;
        token: string;
      }>(`${this.apiUrl}/users/login`, credentials)
      .pipe(
        tap((res) => {
          this.setToken(res.token);
          localStorage.setItem('user_id', res.id);
        })
      );
  }

  getCurrentUserId(): number | null {
    if (isPlatformBrowser(this.platformId)) {
      const userId = localStorage.getItem('user_id');
      return userId ? parseInt(userId, 10) : null;
    }
    return null;
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.tokenKey);
    }
  }

  isLoggedIn(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const result = !!localStorage.getItem(this.tokenKey);
      console.log('isLoggedIn check:', result);
      return result;
    }
    return false;
  }

  getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(this.tokenKey);
    }
    return null;
  }

  setToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }
}
