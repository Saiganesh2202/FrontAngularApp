import { Component,OnInit } from '@angular/core';
import { EnrollmentService } from '../../services/enrollment.service';
import { Enrollment } from '../../models/enrollment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-enrollment-list',
  imports: [CommonModule],
  templateUrl: './enrollment-list.component.html',
  styleUrl: './enrollment-list.component.css'
})
export class EnrollmentListComponent implements OnInit {
  enrollments: Enrollment[] = [];

  constructor(private enrollmentService: EnrollmentService) {}

  ngOnInit(): void {
    this.enrollmentService.getAll().subscribe((data) => {
      this.enrollments = data;
    });
  }
}
