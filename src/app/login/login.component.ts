import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  isLoginMode: boolean = true;

  // Registration fields
  firstname: string = '';
  lastname: string = '';

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private router: Router
  ) {}

  login() {
    this.auth
      .login({
        email: this.email,
        password: this.password,
      })
      .subscribe({
        next: (res) => {
          console.log('Login successful', res);
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error('Login failed', err);
          alert('Login failed. Please check your credentials.');
        },
      });
  }

  register() {
    this.auth
      .register({
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
      })
      .subscribe({
        next: (res) => {
          console.log('Registration successful', res);
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error('Registration failed', err);
          alert('Registration failed. Please try again.');
        },
      });
  }

  onSubmit() {
    if (this.isLoginMode) {
      this.login();
    } else {
      this.register();
    }
  }

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
    // Clear form when switching modes
    this.email = '';
    this.password = '';
    this.firstname = '';
    this.lastname = '';
  }

  // Pre-fill with demo credentials
  useDemoCredentials() {
    this.email = 'demo@example.com';
    this.password = 'demo123';
  }
}
