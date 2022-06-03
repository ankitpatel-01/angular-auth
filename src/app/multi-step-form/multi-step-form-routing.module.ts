import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiStepFormComponent } from './multi-step-form.component';

const routes: Routes = [{ path: '', component: MultiStepFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultiStepFormRoutingModule { }
