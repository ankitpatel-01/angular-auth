import { TestBed } from '@angular/core/testing';

import { CreatePrescriptionPresenterService } from './create-prescription-presenter.service';

describe('CreatePrescriptionPresenterService', () => {
  let service: CreatePrescriptionPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatePrescriptionPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
