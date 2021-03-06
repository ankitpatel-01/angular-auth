import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './core/login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'employees',
    loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
    canActivate: [AuthGuard]
  },
  { path: 'fileUpload', loadChildren: () => import('./file-upload/file-upload.module').then(m => m.FileUploadModule) },
  { path: 'create-prescription', loadChildren: () => import('./create-prescription/create-prescription.module').then(m => m.CreatePrescriptionModule) },
  { path: 'multi-step-form', loadChildren: () => import('./multi-step-form/multi-step-form.module').then(m => m.MultiStepFormModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
