import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePrescriptionComponent } from './create-prescription.component';

const routes: Routes = [{ path: '', component: CreatePrescriptionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatePrescriptionRoutingModule { }
