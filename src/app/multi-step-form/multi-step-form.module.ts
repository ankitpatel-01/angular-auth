import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultiStepFormRoutingModule } from './multi-step-form-routing.module';
import { MultiStepFormComponent } from './multi-step-form.component';
import { MultiStepFormPresentationComponent } from './multi-step-form-presentation/multi-step-form-presentation.component';
import { PersonalInfoPresentationComponent } from './multi-step-form-presentation/personal-info-presentation/personal-info-presentation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EductionInfoPresentationComponent } from './multi-step-form-presentation/eduction-info-presentation/eduction-info-presentation.component';
import { PaymentInfoPresentationComponent } from './multi-step-form-presentation/payment-info-presentation/payment-info-presentation.component';


@NgModule({
  declarations: [
    MultiStepFormComponent,
    MultiStepFormPresentationComponent,
    PersonalInfoPresentationComponent,
    EductionInfoPresentationComponent,
    PaymentInfoPresentationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MultiStepFormRoutingModule
  ]
})
export class MultiStepFormModule { }
