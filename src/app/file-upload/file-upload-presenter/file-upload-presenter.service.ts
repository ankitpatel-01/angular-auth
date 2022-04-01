import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { MyFile } from '../File.modal';

@Injectable()
export class FileUploadPresenterService {

  private file: MyFile;
  private _fileToUpload: Subject<MyFile>;
  public fileToUpload$: Observable<MyFile>;

  constructor(private fb: FormBuilder) {
    this.file = {} as MyFile;
    this._fileToUpload = new Subject<MyFile>();
    this.fileToUpload$ = new Observable<MyFile>();
    this.fileToUpload$ = this._fileToUpload.asObservable();
  }

  public buildDateForm() {
    return this.fb.group({
      fromDate: [null],
      toDate: [null],
    })
  }


  uploadFile(file: File) {
    //size in mb
    let size = Math.round(file.size / 1024 / 1024)
    if (size <= 2) {
      this.file.name = file.name;
      this.file.size = size;
      this.file.type = file.type;
      if (this.file.type === "image/png" || "image/jpg" || "image/jpge") {
        console.log(file.type)
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
          this.file.content = event.target?.result as string;
          this._fileToUpload.next(this.file);
        };
      }
      else {
        alert("Please Select an img");
        return;
      }
    }
    else {
      alert("File Size is above 2mb")
    }
  }


}


