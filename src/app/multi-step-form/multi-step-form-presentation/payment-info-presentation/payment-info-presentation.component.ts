import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-info-presentation',
  templateUrl: './payment-info-presentation.component.html',
})
export class PaymentInfoPresentationComponent implements OnInit {
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
  @Output() onSubmitEmit: EventEmitter<string> = new EventEmitter<string>();
  public paymentInfoForm: FormGroup;
  constructor(private _fb: FormBuilder, private _cd: ChangeDetectorRef) { }
  ngOnDestroy(): void {
    console.log("it is destory")
  }

  ngOnInit() {
    if (this.startingForm) {
      this.paymentInfoForm = this._fb.group(this.startingForm)
    } else {
      this.paymentInfoForm = this._fb.group({
        cardNumber: [null, [Validators.required]],
        cvv: [null, [Validators.required]],
      })
    }
    this.subformInitialized.emit(this.paymentInfoForm);
  }

  doChangeStep(direction:string) {
    this.changeStep.emit(direction);
    this.subformInitialized.emit(this.paymentInfoForm);
  }

  onSubmit(){
    this.onSubmitEmit.emit('')
  }
}
