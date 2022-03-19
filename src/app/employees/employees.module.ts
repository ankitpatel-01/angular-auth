import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpCardHolderComponent } from './emp-card-holder/emp-card-holder.component';
import { EmployeesService } from './employees.service';


@NgModule({
  declarations: [
    EmployeesComponent,
    EmpCardHolderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    EmployeesRoutingModule
  ],
  providers: [
    EmployeesService
  ]
})
export class EmployeesModule { }
