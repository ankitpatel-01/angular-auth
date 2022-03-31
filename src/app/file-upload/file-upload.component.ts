import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { MyFile } from './File.modal';
import { FilesService } from './files.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  /** user list data */
  public filesList$: Observable<MyFile[]>

  constructor(private fileService: FilesService) { 
    this.filesList$ = new Observable<MyFile[]>();
  }

  ngOnInit(): void {
    this.filesList$ = this.fileService.getAllFiles();
  }

  UploadFile(file: MyFile) {
    this.fileService.addFile(file).subscribe({
      next: () => {
        alert("File Added");
        this.filesList$ = this.fileService.getAllFiles();
      },
      error: (e) => { console.log(e) }
    })
  }

}
