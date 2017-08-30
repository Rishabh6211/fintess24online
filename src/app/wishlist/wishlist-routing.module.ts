import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MywishlistComponent } from './mywishlist/mywishlist.component'
import { WishlistService } from './services/wishlist.service';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Wishlist'
    },
    children: [
      {
        path: '',
        component: MywishlistComponent,
        data: {
          title: 'mywishlist'
        }, 
      }

    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,    
    HttpModule   
  ],
  providers: [
    WishlistService
  ],
  exports: [
    RouterModule,
    FormsModule    
  ]
})
export class WishlistRoutingModule {}
