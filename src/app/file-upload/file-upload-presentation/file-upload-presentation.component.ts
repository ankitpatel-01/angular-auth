import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FileUploadPresenterService } from '../file-upload-presenter/file-upload-presenter.service';
import { MyFile } from '../File.modal';

@Component({
  selector: 'app-file-upload-presentation',
  templateUrl: './file-upload-presentation.component.html',
  styleUrls: ['./file-upload-presentation.component.scss'],
  viewProviders: [FileUploadPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileUploadPresentationComponent implements OnInit {

  public file: File;

  @Output() fileToUpload:EventEmitter<MyFile>;

  constructor(private _fileUploadPrensenter: FileUploadPresenterService) {
    this.fileToUpload = new EventEmitter<MyFile>();
   }

  ngOnInit(): void {
    this._fileUploadPrensenter.fileToUpload$.subscribe({
      next: (file) => {
        this.fileToUpload.emit(file);
      },
      error: (e) => { console.log(e) }
    })
  }

  readFile(files: any) {
    this.file = files.files[0];
  }

  uploadFile() {
    if (this.file) {
      this._fileUploadPrensenter.uploadFile(this.file)
    }
    else {
      alert("No File is Selected")
    }
  }
}
