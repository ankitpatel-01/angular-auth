import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { OverlayModule } from '@angular/cdk/overlay'

import { UserService } from './user.service';
import { UserContainerComponent } from './user-container/user-container.component';
import { UserListPresentationComponent } from './user-container/user-list-presentation/user-list-presentation.component';
import { UserFormPresentationComponent } from './user-container/user-form-presentation/user-form-presentation.component';
import { HTTPINTERCEPTOR } from '../core/services/httpintercepter.interceptor';
import { SharedModule } from '../shared/shared.module';


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
    SharedModule
  ],
  providers: [
    {
      // use fake backend in place of Http service for backend-less development
      provide: HTTP_INTERCEPTORS,
      useClass: HTTPINTERCEPTOR,
      multi: true
    },
    UserService
  ]
})
export class UsersModule { }
