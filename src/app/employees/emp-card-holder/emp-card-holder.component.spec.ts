import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpCardHolderComponent } from './emp-card-holder.component';

describe('EmpCardHolderComponent', () => {
  let component: EmpCardHolderComponent;
  let fixture: ComponentFixture<EmpCardHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpCardHolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpCardHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
