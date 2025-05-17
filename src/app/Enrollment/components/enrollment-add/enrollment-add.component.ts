import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EnrollmentService } from '../../services/enrollment.service';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-enrollment-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './enrollment-add.component.html',
})
export class EnrollmentAddComponent implements OnInit {
  enrollmentForm: FormGroup;

  studentOptions: any[] = [];
  courseOptions: any[] = [];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private enrollmentService: EnrollmentService,
    private router: Router
  ) {
    this.enrollmentForm = this.fb.group({
      studentId: ['', Validators.required],
      courseId: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadStudents();
    this.loadCourses();
  }

  loadStudents() {
    this.http.get<any[]>('http://localhost:5183/api/students')
      .subscribe(data => this.studentOptions = data);
  }

  loadCourses() {
    this.http.get<any[]>('http://localhost:5183/api/courses')
      .subscribe(data => this.courseOptions = data);
  }

  onSubmit(): void {
    if (this.enrollmentForm.valid) {
      this.enrollmentService.add(this.enrollmentForm.value).subscribe({
        next: () => {
          alert('Enrollment added successfully!');
          this.router.navigate(['/enrollments']);
        },
        error: () => {
          alert('Failed to add enrollment.');
        }
      });
    }
  }
}
