import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'token';
  private apiUrl = 'http://localhost:3000';

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
      .post<{ token: string }>(`${this.apiUrl}/users/login`, credentials)
      .pipe(
        tap((res) => {
          this.setToken(res.token);
        })
      );
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }
  getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(this.tokenKey);
    }
    return null;
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
}
