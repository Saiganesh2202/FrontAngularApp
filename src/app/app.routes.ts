import { Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EnrollmentListComponent } from './Enrollment/components/enrollment-list/enrollment-list.component';
import { EnrollmentAddComponent } from './Enrollment/components/enrollment-add/enrollment-add.component';

export const routes: Routes = [
  {
    path: '',
    component: AdminLoginComponent
  },
    { path: 'enrollments', component: EnrollmentListComponent },
 
  { path: '', redirectTo: '/enrollments', pathMatch: 'full' },

   {
    path: 'add-enrollment',
    loadComponent: () => import('./Enrollment/components/enrollment-add/enrollment-add.component').then(m => m.EnrollmentAddComponent),
  },
  {
    path: '',
    redirectTo: '/add-enrollment',
    pathMatch: 'full',
  }
];
