import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchPipe } from './pipes/search.pipe';
import { CounterInputComponent } from './components/counter-input/counter-input.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PaginationComponent,
    SearchPipe,
    CounterInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    PaginationComponent,
    SearchPipe,
    CounterInputComponent
  ]
})
export class SharedModule { }
