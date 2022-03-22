import { TestBed } from '@angular/core/testing';

import { HTTPINTERCEPTOR } from './httpintercepter.interceptor';

describe('HTTPINTERCEPTERInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HTTPINTERCEPTOR
      ]
  }));

  it('should be created', () => {
    const interceptor: HTTPINTERCEPTOR = TestBed.inject(HTTPINTERCEPTOR);
    expect(interceptor).toBeTruthy();
  });
});
