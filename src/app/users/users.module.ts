import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { OverlayModule } from '@angular/cdk/overlay'

import { UserService } from './user.service';
import { UserContainerComponent } from './user-container/user-container.component';
import { UserListPresentationComponent } from './user-container/user-list-presentation/user-list-presentation.component';
import { UserFormPresentationComponent } from './user-container/user-form-presentation/user-form-presentation.component';


@NgModule({
  declarations: [
  
    UserContainerComponent,
       UserListPresentationComponent,
       UserFormPresentationComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    OverlayModule,
  ],
  providers:[
    UserService
  ]
})
export class UsersModule { }
