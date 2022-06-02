import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class CreatePrescriptionPresenterService {

  constructor(private _fb:FormBuilder) { }

   public createPatientForm(): FormGroup {
    return this._fb.group({
      patientMobileNumber: [9632587412, [Validators.required, Validators.minLength(10)]],
      patientEmailId: [{ value: null, disabled: true, }],
      diseaseIds: [null, [Validators.required]],
    });
  }

  public mediceneForm(): FormGroup {
    return this._fb.group({
      patientMobileNumber: [9632587412, [Validators.required, Validators.minLength(10)]],
      patientEmailId: [{ value: null, disabled: true, }],
      diseaseIds: [null, [Validators.required]],
    });
  }
}
