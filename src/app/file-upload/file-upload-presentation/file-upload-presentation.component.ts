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

  public files: File[];
  public dateForm: FormGroup;

  public startDate: string;
  public endDate: string;

  public fileInput: FormControl;


  @Output() fileToUpload: EventEmitter<MyFile>;

  constructor(private _fileUploadPrensenter: FileUploadPresenterService) {
    this.files = [];
    this.fileToUpload = new EventEmitter<MyFile>();
    this.fileInput = new FormControl(null);
  }

  ngOnInit(): void {
    this.dateForm = this._fileUploadPrensenter.buildDateForm();
    this._fileUploadPrensenter.fileToUpload$.subscribe({
      next: (file) => {
        console.log(file)
        this.fileToUpload.emit(file);
        this.files = [];
      },
      error: (e) => { console.log(e) }
    })
  }

  readFile(files: any) {
    this.files = Array.from(files.files);
  }

  uploadFile() {
    if (this.files.length !== 0) {
      this._fileUploadPrensenter.uploadFile(this.files);
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

  removeFile(index: number) {
    this.files.splice(index, 1);
  }
}
