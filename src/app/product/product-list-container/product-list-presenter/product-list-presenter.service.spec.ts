import { TestBed } from '@angular/core/testing';

import { ProductListPresenterService } from './product-list-presenter.service';

describe('ProductListPresenterService', () => {
  let service: ProductListPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductListPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
