import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MyFile } from '../File.modal';

@Injectable()
export class FileUploadPresenterService {

  private file:MyFile;
  private _fileToUpload:Subject<MyFile>;
  public fileToUpload$:Observable<MyFile>;

  constructor() { 
    this.file = {} as File;
    this._fileToUpload = new Subject<MyFile>();
    this.fileToUpload$ = new Observable<MyFile>();
  }


  uploadFile(file:File){
    //size in mb
    let size = Math.round(file.size/1024/1024)
    if(size<=2){
      this.file.name = file.name;
      this.file.size = size;
      this.file.type = file.type;
      this._fileToUpload.next(file);
    }
    else{
      alert("File Size is above 2mb")
    }
  }


}
