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
  firstname: string = '';
  lastname: string = '';
  password: string = '';

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private router: Router
  ) {
    console.log('LoginComponent initialized with:', {
      firstname: this.firstname,
      lastname: this.lastname,
      password: this.password,
    });

  }

  login() {
    this.auth
      .login({
        firstname: this.firstname,
        lastname: this.lastname,
        password: this.password,
      })
      .subscribe({
        next: (res) => {
          console.log('Login successful', res);
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error('Login failed', err);
        },
      });
  }
  debugLastName(value: any) {
    console.log('LastName input:', value);
    console.log('Type:', typeof value);
  }
}
