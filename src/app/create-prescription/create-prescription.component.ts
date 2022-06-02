import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Component({
  selector: 'app-create-prescription',
  templateUrl: './create-prescription.component.html',
  styleUrls: ['./create-prescription.component.scss']
})
export class CreatePrescriptionComponent implements OnInit {

  public patientDetails$:Observable<any>;
  public diseases$:Observable<any>;
  public medicines$:Observable<any>;

  constructor(private _service:ApiService) { }

  ngOnInit(): void {
  }

  getPatientDetails(number:string){
    this.patientDetails$ = this._service.getPatientDetailsByMobileNumber(number)
  }

  fetchDiseases(){
    this.diseases$ = this._service.getDisease();
  }

  fetchMedicines(diseaseIds:any){
    this.medicines$ = this._service.getMedicine(diseaseIds)
  }

}
