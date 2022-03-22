import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../model/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.scss'],

})
export class UserContainerComponent implements OnInit {

  /** user list data */
  public userList$: Observable<User[]>

  constructor(
    private userService: UserService
  ) {
    this.userList$ = new Observable<User[]>();
  }

  ngOnInit(): void {
    this.userList$ = this.userService.getUsers();
  }

  public deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe({
      next: (res) => {
        alert('User Deleted Successfully');
        this.userList$ = this.userService.getUsers();
      },
      error:(e)=>{console.log(e)}
    })
  }

  public addUser(data: User) {
    this.userService.addUser(data).subscribe({
      next: (res) => {
        alert('User Added Successfully')
        this.userList$ = this.userService.getUsers();
      },
      error:(e)=>{console.log(e)}
    })
  }

  public editUser(data: User) {
    this.userService.editUser(data.id, data).subscribe({
      next: (res) => {
        alert('User Edited Successfully')
        this.userList$ = this.userService.getUsers();
      },
      error:(e)=>{console.log(e)}
    })
  }
}
