import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { MyFile } from './File.modal';

@Injectable()
export class FilesService {

  private apiUrl: string = "http://localhost:3000/files";

  constructor(
    private http: HttpClient
  ) { }

  getAllFiles(): Observable<MyFile[]> {
    return this.http.get<MyFile[]>(this.apiUrl);
  }

  // deleteUser(id: number) {
  //   return this.http.delete(`${this.apiUrl}/${id}`);
  // }

  addFile(file: MyFile): Observable<MyFile> {
    return this.http.post<MyFile>(this.apiUrl, file);
  }

  // editUser(id:number,user:User): Observable<User> {
  //   return this.http.put<User>(`${this.apiUrl}/${id}`, user);
  // }
}
