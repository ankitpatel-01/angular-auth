import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-eduction-info-presentation',
  templateUrl: './eduction-info-presentation.component.html',
})
export class EductionInfoPresentationComponent implements OnInit {

 
  @Input() startingForm: FormGroup;
  @Output() subformInitialized: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() changeStep: EventEmitter<string> = new EventEmitter<string>();
  public educationInfoForm: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    if (this.startingForm) {
      this.educationInfoForm = this._fb.group(this.startingForm)
    } else {
      this.educationInfoForm = this._fb.group({
        CollageName: [,Validators.required],
        CGPA: [,Validators.required],
      })
    }
    this.subformInitialized.emit(this.educationInfoForm);
  }

  doChangeStep(direction:string) {
    this.changeStep.emit(direction);
  }
}
