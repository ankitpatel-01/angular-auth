import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardPresentationComponent } from './product-card-presentation.component';

describe('ProductCardPresentationComponent', () => {
  let component: ProductCardPresentationComponent;
  let fixture: ComponentFixture<ProductCardPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCardPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
