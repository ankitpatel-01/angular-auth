import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { User } from '../../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserFormPresenterService {

  public userFormData: Subject<User>;
  public userFormData$: Observable<User>;

  constructor(
    private fb: FormBuilder
  ) { 
    this.userFormData = new Subject();
    this.userFormData$ = new Observable();

    this.userFormData$ = this.userFormData.asObservable();
  }

  public buildForm() {
    return this.fb.group({
      name: [null, [Validators.required]],
      age: [null, [Validators.required]],
      gender: [null, [Validators.required]]
    })
  }

  public onFormSubmit(form: FormGroup) {
    if (!form.valid) {
      return;
    }

    this.userFormData.next(form.value);
  }
}
