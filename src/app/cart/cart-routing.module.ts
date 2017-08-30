import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MycartComponent } from './mycart/mycart.component'
import { CartService } from './services/cart.service';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Cart'
    },
    children: [
      {
        path: '',
        component: MycartComponent,
        data: {
          title: 'mycart'
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
    CartService
  ],
  exports: [
    RouterModule,
    FormsModule    
  ]
})
export class CartRoutingModule {}
