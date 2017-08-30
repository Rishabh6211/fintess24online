import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MywishlistComponent } from './mywishlist/mywishlist.component';

import { WishlistRoutingModule } from './wishlist-routing.module';
import { WishlistService } from './services/wishlist.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    WishlistRoutingModule,
    SharedModule
  ],
  declarations: [MywishlistComponent]
})
export class WishlistModule { }
