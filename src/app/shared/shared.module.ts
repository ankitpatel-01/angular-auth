import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchPipe } from './pipes/search.pipe';
import { CounterInputComponent } from './components/counter-input/counter-input.component';
import { FormsModule } from '@angular/forms';
import { SortDirective } from './directives/sort.directive';
import { FiledropzoneDirective } from './directives/filedropzone.directive';



@NgModule({
  declarations: [
    PaginationComponent,
    SearchPipe,
    CounterInputComponent,
    SortDirective,
    FiledropzoneDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    PaginationComponent,
    SearchPipe,
    CounterInputComponent,
    SortDirective,
    FiledropzoneDirective
  ]
})
export class SharedModule { }
