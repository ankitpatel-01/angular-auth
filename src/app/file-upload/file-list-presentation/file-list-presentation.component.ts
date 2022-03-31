import { Component, Input, OnInit } from '@angular/core';
import { MyFile } from '../File.modal';

@Component({
  selector: 'app-file-list-presentation',
  templateUrl: './file-list-presentation.component.html',
  styleUrls: ['./file-list-presentation.component.scss']
})
export class FileListPresentationComponent implements OnInit {

   /** setter for user list */
   @Input() public set fileList(value: MyFile[] | null) {
    if (value) {
      this._fileList = value;
    }
  }
  public get fileList(): MyFile[] {
    return this._fileList;
  }

  private _fileList: MyFile[];

  constructor() { }

  ngOnInit(): void {
  }

}
