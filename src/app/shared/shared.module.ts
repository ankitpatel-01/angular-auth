import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchPipe } from './pipes/search.pipe';
import { CounterInputComponent } from './components/counter-input/counter-input.component';
import { FormsModule } from '@angular/forms';
import { SortDirective } from './directives/sort.directive';
import { FiledropzoneDirective } from './directives/filedropzone.directive';
import { TabsetComponent } from './components/tabset/tabset.component';
import { TabsComponent } from './components/tabset/tabs/tabs.component';



@NgModule({
  declarations: [
    PaginationComponent,
    SearchPipe,
    CounterInputComponent,
    SortDirective,
    FiledropzoneDirective,
    TabsetComponent,
    TabsComponent
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
    FiledropzoneDirective,
    TabsetComponent,
    TabsComponent
  ]
})
export class SharedModule { }
