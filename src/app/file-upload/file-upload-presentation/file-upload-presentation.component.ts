import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FileUploadPresenterService } from '../file-upload-presenter/file-upload-presenter.service';
import { MyFile } from '../File.model';

@Component({
  selector: 'app-file-upload-presentation',
  templateUrl: './file-upload-presentation.component.html',
  styleUrls: ['./file-upload-presentation.component.scss'],
  viewProviders: [FileUploadPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileUploadPresentationComponent implements OnInit {

  public file: File;
  public dateForm: FormGroup;

  public startDate: string;
  public endDate: string;

  public fileInput: FormControl;


  @Output() fileToUpload: EventEmitter<MyFile>;

  constructor(private _fileUploadPrensenter: FileUploadPresenterService) {
    this.fileToUpload = new EventEmitter<MyFile>();
    this.fileInput = new FormControl(null);
  }

  ngOnInit(): void {
    this.dateForm = this._fileUploadPrensenter.buildDateForm();
    this._fileUploadPrensenter.fileToUpload$.subscribe({
      next: (file) => {
        this.fileToUpload.emit(file);
      },
      error: (e) => { console.log(e) }
    })
  }

  readFile(files: any) {
    this.file = files.files[0];
    this.fileInput.reset();
  }

  uploadFile() {
    if (this.file) {
      this._fileUploadPrensenter.uploadFile(this.file)
      this.fileInput.reset();
    }
    else {
      alert("No File is Selected")
    }
  }

  readStartDate(input: any) {
    this.startDate = input.value;
  }

  readendDate(input: any) {
    this.endDate = input.value;
  }
}
