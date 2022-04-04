import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileListPresenterService } from '../file-list-presenter/file-list-presenter.service';
import { MyFile } from '../File.model';

@Component({
  selector: 'app-file-list-presentation',
  templateUrl: './file-list-presentation.component.html',
  styleUrls: ['./file-list-presentation.component.scss'],
  viewProviders: [FileListPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileListPresentationComponent implements OnInit {

  /** setter & getter for user list */
  @Input() public set fileList(value: MyFile[] | null) {
    if (value) {
      this._fileList = value;
    }
  }
  public get fileList(): MyFile[] {
    return this._fileList;
  }

  @Output() public deleteId: EventEmitter<number>;

  private _fileList: MyFile[];

  constructor(private _listPresenter: FileListPresenterService) {
    this.deleteId = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  viewFile(type: string, content: string) {
    this._listPresenter.openFile(content, type);
  }

  deleteFile(id: number) {
    this.deleteId.emit(id);
  }

}
