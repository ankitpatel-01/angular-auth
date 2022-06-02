import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePrescriptionPresentationComponent } from './create-prescription-presentation.component';

describe('CreatePrescriptionPresentationComponent', () => {
  let component: CreatePrescriptionPresentationComponent;
  let fixture: ComponentFixture<CreatePrescriptionPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePrescriptionPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePrescriptionPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
