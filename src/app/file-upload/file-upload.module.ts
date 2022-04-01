import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadRoutingModule } from './file-upload-routing.module';
import { FileUploadComponent } from './file-upload.component';
import { FileUploadPresentationComponent } from './file-upload-presentation/file-upload-presentation.component';
import { FileListPresentationComponent } from './file-list-presentation/file-list-presentation.component';
import { HttpClientModule } from '@angular/common/http';
import { FilesService } from './files.service';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FileUploadComponent,
    FileUploadPresentationComponent,
    FileListPresentationComponent
  ],
  imports: [
    CommonModule,
    FileUploadRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers:[
    FilesService
  ]
})
export class FileUploadModule { }
