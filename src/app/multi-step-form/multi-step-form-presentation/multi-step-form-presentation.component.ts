import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-multi-step-form-presentation',
  templateUrl: './multi-step-form-presentation.component.html',
  styleUrls: ['./multi-step-form-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiStepFormPresentationComponent implements OnInit {

  private currentStepBs: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  public currentStep$: Observable<number> = this.currentStepBs.asObservable();
  public userForm: FormGroup;
  public steps: any = [
    {
      index: 1,
      name: "step1",
      isActive: true
    },
    {
      index: 2,
      name: "step2",
      isActive: false
    },
    {
      index: 3,
      name: "step3",
      isActive: false
    }
  ]

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this._fb.group({
      personalInfo: null,
      educationInfoForm: null,
      paymentInfoForm: null
    });
  }

  subformInitialized(name: string, group: FormGroup) {
    this.userForm.setControl(name, group);
  }

  changeStep(currentStep: number, direction: string) {
    switch (currentStep) {
      case 1:
        if (direction === 'forward') {
          this.currentStepBs.next(2);
          this.steps[1]['isActive'] = true;
        }
        break;
      case 2:
        if (direction === 'back') {
          this.currentStepBs.next(1);
          this.steps[1]['isActive'] = false;
        }
        if (direction === 'forward') {
          this.currentStepBs.next(3);
          this.steps[2]['isActive'] = true;
        }
        break;
      case 3:
        if (direction === 'back') {
          this.currentStepBs.next(2);
          this.steps[2]['isActive'] = false;
        }
        break;
    }
  }

  onSubmit() {
    const formValues = this.userForm.value;
    // submit the form with a service
  }
}

