import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductListContainerComponent } from './product-list-container/product-list-container.component';
import { ProductListPresentationComponent } from './product-list-container/product-list-presentation/product-list-presentation.component';
import { ProductCardPresentationComponent } from './product-list-container/product-list-presentation/product-card-presentation/product-card-presentation.component';


@NgModule({
  declarations: [
    ProductComponent,
    ProductListContainerComponent,
    ProductListPresentationComponent,
    ProductCardPresentationComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
