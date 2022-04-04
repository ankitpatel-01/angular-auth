import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { MyFile } from './File.model';
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

  /**
   * Check if file with same name already exist 
   * @param file 
   */
  UploadFile(file: MyFile) {
    this.filesList$.subscribe({
      next: (list) => {
        let isFile = list.find((el) => {
          return el.name === file.name
        })
        if (isFile) {
          alert("File with same name already exist.")
        }
        else {
          this.addFile(file);
        }
      },
      error: (e) => { console.log(e) }
    })
  }

  /**
   * Add new file in database
   * @param file 
   */
  public addFile(file: MyFile) {
    this.fileService.addFile(file).subscribe({
      next: () => {
        alert("File Added");
        this.filesList$ = this.fileService.getAllFiles();
      },
      error: (e) => { console.log(e) }
    })
  }

  /**
   * delete file from db
   * @param id 
   */
  deteleFile(id: number) {
    this.fileService.deleteFile(id).subscribe({
      next: (res) => {
        this.filesList$ = this.fileService.getAllFiles();
        alert("File is successfully deleted");
      },
      error: (e) => { console.log(e) }
    })
  }

}
