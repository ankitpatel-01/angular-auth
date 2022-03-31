import { Component, OnInit } from '@angular/core';
import { MyFile } from './File.modal';
import { FilesService } from './files.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  constructor(private fileService: FilesService) { }

  ngOnInit(): void {
  }

  UploadFile(file: MyFile) {
    this.fileService.addFile(file).subscribe({
      next: () => {
        alert("File Added");
      },
      error: (e) => { console.log(e) }
    })
  }

}
