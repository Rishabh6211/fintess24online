import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MycartComponent } from './mycart/mycart.component';

import { CartRoutingModule } from './cart-routing.module';
import { CartService } from './services/cart.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule
  ],
  declarations: [MycartComponent]
})
export class CartModule { }
