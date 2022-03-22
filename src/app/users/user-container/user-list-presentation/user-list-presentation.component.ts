import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, Component, ComponentRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs/internal/Subject';
import { User } from '../../model/user.model';
import { UserFormPresentationComponent } from '../user-form-presentation/user-form-presentation.component';
import { UserListPresenterService } from '../user-list-presenter/user-list-presenter.service';

@Component({
  selector: 'app-user-list-presentation',
  templateUrl: './user-list-presentation.component.html',
  styleUrls: ['./user-list-presentation.component.scss'],
  viewProviders: [UserListPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListPresentationComponent implements OnInit {

  /** setter for user list */
  @Input() public set userList(value: User[] | null) {
    if (value) {
      this._userList = value;
    }
  }
  public get userList(): User[] {
    return this._userList;
  }

  /** emits user id to be deleted */
  @Output() public delete: EventEmitter<number>;
  /** emitter to emit add user data */
  @Output() public addUser: EventEmitter<User>;
  /** emitter to emit edit user details */
  @Output() public editUser: EventEmitter<User>;


  /** user id */
  private _userId: number;
  /** search field control object */
  public search: FormControl;

  private _userList: User[];


  constructor(
    private userListPresenterService: UserListPresenterService,
    private overlay: Overlay
  ) {
    this._userList = [];
    this.delete = new EventEmitter<number>();
    this.addUser = new EventEmitter<User>();
    this.editUser = new EventEmitter<User>();
    this.search = new FormControl();
  }

  ngOnInit(): void {
    this.userListPresenterService.delete$.subscribe((id: number) => {
      this.delete.emit(id);
    })
  }

  /** on delete button click */
  public onDelete(id: number) {
    this.userListPresenterService.deleteUser(id)
  }

  /** on add button click */
  public onAdd() {
    this.openUserForm();
  }

  /** on edit button click */
  public onEdit(item: User) {
    this._userId = item.id;
    this.openUserForm(item);
  }

  /**
   * open user form dialog
   * @param userData user data - Optional
   */
  public openUserForm(userData?: User) {
    //config of overlay
    let config = new OverlayConfig();
    config.hasBackdrop = true;
    config.positionStrategy = this.overlay.position().global().centerHorizontally().right();

    const overlayRef = this.overlay.create(config);

    const component = new ComponentPortal(UserFormPresentationComponent);
    const componentRef = overlayRef.attach(component);

    overlayRef.backdropClick().subscribe(() => {
      overlayRef.detach();
    });

    // pass user data as input
    componentRef.instance.userData = userData as User;
    // listen to cancel event
    componentRef.instance.cancel.subscribe((res) => {
      overlayRef.detach();
    })
    // listen to add user event
    componentRef.instance.add.subscribe((res: User) => {
      this.addUser.emit(res);
    })
    // listen to edit user event
    componentRef.instance.edit.subscribe((res: User) => {
      res.id = this._userId;
      this.editUser.emit(res);
    })
  }
}
