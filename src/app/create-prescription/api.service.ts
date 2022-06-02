import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public apiLink: string = 'http://103.249.120.58:8510/api/'
  constructor(private _http:HttpClient) { }


  public getPatientDetailsByMobileNumber(patientMobileNumber: string): Observable<any> {
    return this._http.get<any>(`${this.apiLink}/patient/${patientMobileNumber}`)
  }

   public getDisease(): Observable<any> {
    return this._http.get<any>(`${this.apiLink}/disease`)
  }

  public getMedicine(diseaseIds: number[]): Observable<any> {
    let queryParams = `?diseasesId=${diseaseIds.shift()}`;

    if (diseaseIds.length > 0) {
      queryParams += '&diseasesId=';
      queryParams += diseaseIds.join('&diseasesId=')
    }

    return this._http.get<any>(`${this.apiLink}/disease/medicine/${queryParams}`)
  }
}
