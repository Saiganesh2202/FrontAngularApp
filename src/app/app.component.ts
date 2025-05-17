import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EnrollmentListComponent } from "./Enrollment/components/enrollment-list/enrollment-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  EnrollmentListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LMS';
}
