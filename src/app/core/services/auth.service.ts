import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: string = "http://localhost:4000";

  private _currentUser: BehaviorSubject<User>;
  public currentUser$: Observable<User>;


  private _isLoggedIn: BehaviorSubject<boolean>;
  public isLoggedIn$: Observable<boolean>;

  constructor(private http: HttpClient) {
    this._isLoggedIn = new BehaviorSubject<boolean>(localStorage.getItem('token') ? true : false);
    this.isLoggedIn$ = this._isLoggedIn.asObservable();

    this._currentUser = new BehaviorSubject<User>(this.decodeToken(localStorage.getItem('token')!)!);
    this.currentUser$ = this._currentUser.asObservable();
  }

  public get isLoggedIn(): boolean {
    return this._isLoggedIn.value;
  }

  public login(username: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users/authenticate`, { username, password })
      .pipe(map(res => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('token', JSON.stringify(res.token));
        this._isLoggedIn.next(true);
        this._currentUser.next(this.decodeToken(localStorage.getItem('token')!)!);
        return res;
      }));
  }

  public logout(): void {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
    this._isLoggedIn.next(false);
    this._currentUser.next(this.decodeToken(localStorage.getItem('token')!)!)
  }

  decodeToken(token: string): User | null {
    if (localStorage.getItem('token') !== null) {
      return JSON.parse(atob(token.split('.')[1]));
    } else {
      return null;
    }
  }
}
