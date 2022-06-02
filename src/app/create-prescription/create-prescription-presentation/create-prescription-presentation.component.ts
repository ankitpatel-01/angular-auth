import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CreatePrescriptionPresenterService } from '../create-prescription-presenter/create-prescription-presenter.service';

@Component({
  selector: 'app-create-prescription-presentation',
  templateUrl: './create-prescription-presentation.component.html',
  styleUrls: ['./create-prescription-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [CreatePrescriptionPresenterService],
})
export class CreatePrescriptionPresentationComponent implements OnInit {


  public get diseaseList(): any {
    return this._diseaseList;
  }
  @Input() public set diseaseList(data: any) {
    if (data) {
      console.log(data)
      this._diseaseList = data;
    }
  }

  public get mediceneList(): any {
    return this._mediceneList;
  }
  @Input() public set mediceneList(data: any) {
    if (data) {
      console.log(data)
      this._mediceneList = data;
    }
  }



  public get patientDetails(): any {
    return this._patientDetails;
  }
  @Input() public set patientDetails(value: any) {
    if (value) {
      this._patientDetails = value;
      console.log(this._patientDetails)
      this.patientFormGroup.patchValue({ patientEmailId: value.email });
    }
   
  }


  public patientFormGroup!: FormGroup;
  public medicineFormGroup: FormGroup;

  private _patientDetails: any;
  private _diseaseList: any;
  private _mediceneList: any;
  private _selectedDiseaseIds: any;

  @Output() patientNumber: EventEmitter<string>;
  @Output() fetchDiseases: EventEmitter<Event>;
  @Output() fetchMedicines: EventEmitter<any>;

  constructor(private _presenter: CreatePrescriptionPresenterService) {
    this.patientNumber = new EventEmitter<string>();
    this.fetchDiseases = new EventEmitter<Event>();
    this.fetchMedicines = new EventEmitter<any>();
  }

  ngOnInit(): void {
    this.patientFormGroup = this._presenter.createPatientForm()
  }

  onMobileNumberChange(number: string) {
    if (number.length === 10) {
      this.patientNumber.emit(number)
      this.fetchDiseases.emit();
    }
  }

  onDiseaseSelectionChange(diseases:any){
    this._selectedDiseaseIds = diseases.map((disease:any) => disease.id);
    this.gofetchMedicines(this._selectedDiseaseIds);
  }

  restForm(){
    this.patientFormGroup.controls['patientEmailId'].setValue('');
    this.patientFormGroup.controls['diseaseIds'].setValue(null);
    this._patientDetails = null;
  }

  gofetchMedicines(selectedDiseaseIds:any){
    this.fetchMedicines.emit(selectedDiseaseIds)
  }

}
