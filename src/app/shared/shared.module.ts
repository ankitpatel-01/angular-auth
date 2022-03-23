import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchPipe } from './pipes/search.pipe';



@NgModule({
  declarations: [
    PaginationComponent,
    SearchPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PaginationComponent,
    SearchPipe
  ]
})
export class SharedModule { }
