import { Injectable } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { MyFile } from '../File.model';

@Injectable()
export class FileUploadPresenterService {

  private files: MyFile[];
  private _fileToUpload: Subject<MyFile>;
  public fileToUpload$: Observable<MyFile>;

  constructor(private fb: FormBuilder) {
    this.files = [];
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

  //check file validation and store the type data in File object ans emit File
  uploadFile(files: File[]) {
    let totalFile = files.length;
    files.forEach(async (file) => {
      //size in mb
      let size = Math.round(file.size / 1024 / 1024)
      if (size <= 2) {
        let newfile = {} as MyFile;
        newfile.name = file.name;
        newfile.size = file.size;
        newfile.type = file.type;
        await this.getFileConent(file).then((res) => {
          newfile.content = res;
          totalFile--;
        })
        this.files.push(newfile);
        if (totalFile === 0) {
          this.files.forEach((file) => {
            this._fileToUpload.next(file)
          })
          this.files = [];
        }
      }
      else {
        alert(`${file.name} Size is above 2mb`)
      }
    })

  }


  private getFileConent(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (e) => {
        resolve(e.target?.result as string)
      }
    });
  }

}


