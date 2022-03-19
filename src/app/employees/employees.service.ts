import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Dept } from './models/dept.model';

@Injectable()
export class EmployeesService {

  private apiUrl: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getAllDept(): Observable<Dept[]> {
    return this.http.get<Dept[]>(`${this.apiUrl}/department`);
  }
}
