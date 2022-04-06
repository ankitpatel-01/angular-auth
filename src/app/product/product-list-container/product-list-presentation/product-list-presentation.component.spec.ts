import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListPresentationComponent } from './product-list-presentation.component';

describe('ProductListPresentationComponent', () => {
  let component: ProductListPresentationComponent;
  let fixture: ComponentFixture<ProductListPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
