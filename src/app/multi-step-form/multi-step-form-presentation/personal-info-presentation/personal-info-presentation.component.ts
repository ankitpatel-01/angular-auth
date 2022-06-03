import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-info-presentation',
  templateUrl: './personal-info-presentation.component.html',
})
export class PersonalInfoPresentationComponent implements OnInit, OnDestroy {


  private _startingForm: FormGroup;
  public get startingForm(): FormGroup {
    return this._startingForm;
  }
  @Input() public set startingForm(v: FormGroup) {
    this._startingForm = v
  }

  // @Input() startingForm: FormGroup;
  @Output() subformInitialized: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() changeStep: EventEmitter<string> = new EventEmitter<string>();
  public personalInfoForm: FormGroup;
  constructor(private _fb: FormBuilder, private _cd: ChangeDetectorRef) { }
  ngOnDestroy(): void {
    console.log("it is destory")
  }

  ngOnInit() {
    console.log("onit")
    if (this.startingForm) {
      this.personalInfoForm = this._fb.group(this.startingForm)
    } else {
      this.personalInfoForm = this._fb.group({
        firstName: [null, [Validators.required]],
        lastName: [null, [Validators.required]],
      })
    }
    console.log(this.personalInfoForm as FormGroup, "on init")
    this.subformInitialized.emit(this.personalInfoForm);
  }

  doChangeStep() {
    this.changeStep.emit("forward");
  }

}
