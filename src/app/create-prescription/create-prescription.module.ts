import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatePrescriptionRoutingModule } from './create-prescription-routing.module';
import { CreatePrescriptionComponent } from './create-prescription.component';
import { CreatePrescriptionPresentationComponent } from './create-prescription-presentation/create-prescription-presentation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    CreatePrescriptionComponent,
    CreatePrescriptionPresentationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    CreatePrescriptionRoutingModule
  ]
})
export class CreatePrescriptionModule { }
