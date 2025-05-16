import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './admin-login.component.html'
})
export class AdminLoginComponent {
  admin = {
    username: '',
    password: ''
  };

  message: string = '';

  constructor(private http: HttpClient) {}

  onLogin() {
    this.http.post<any>('https://localhost:7186/api/Admin/login', this.admin).subscribe({
      next: res => {
        this.message = res.message;
      },
      error: err => {
        if (err.status === 401) {
          this.message = 'Invalid username or password.';
        } else {
          this.message = 'An error occurred.';
        }
      }
    });
  }
}

