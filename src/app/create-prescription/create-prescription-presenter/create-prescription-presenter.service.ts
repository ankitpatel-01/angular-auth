import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class CreatePrescriptionPresenterService {

  private _timings:any = [
    {
        id: 0,
        value: 'Mo',
        selected: false,
    },
    {
        id: 1,
        value: 'Af',
        selected: false,
    },
    {
        id: 2,
        value: 'Ev',
        selected: false,
    },
    {
        id: 3,
        value: 'Ni',
        selected: false,
    },
];

  constructor(private _fb:FormBuilder) { }

   public createPatientForm(): FormGroup {
    return this._fb.group({
      patientMobileNumber: [9632587412, [Validators.required, Validators.minLength(10)]],
      patientEmailId: [{ value: null, disabled: true, }],
      diseaseIds: [null, [Validators.required]],
    });
  }

  public mediceneForm(): FormGroup {
    let mediceneForm = this._fb.group({
      medicineId: [null, [Validators.required]],
      medicineDosage: [null, [Validators.required, Validators.min(1), Validators.max(2)]],
      medicineDays: [null, [Validators.required, Validators.min(2), Validators.max(180)]],
      afterBeforeMeal: [true, [Validators.required]],
      medicineTiming: this._fb.array([]),
    });
    this._timings.forEach(() => {
      (<FormArray>mediceneForm.controls['medicineTiming']).push(this._fb.control(false));
    });

    return mediceneForm;
  }

  public get getTimings(): any {
    return this._timings;
  }
}
