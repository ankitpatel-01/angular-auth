import { TestBed } from '@angular/core/testing';

import { ProductCardPresenterService } from './product-card-presenter.service';

describe('ProductCardPresenterService', () => {
  let service: ProductCardPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductCardPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
